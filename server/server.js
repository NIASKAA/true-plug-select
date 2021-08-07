const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { createServer } = require('http');
const { execute, subscribe } = require('graphql');
const { PubSub } = require('graphql-yoga');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { applyMiddleware } = require('graphql-middleware');

const app = express();
const PORT = process.env.PORT || 3001;

const pubsub = new PubSub();

// In order for the chat to work the schemas had to be added to ApolloServer via makeExecutableSchema
const schema = makeExecutableSchema({ typeDefs, resolvers });

const middleware = [];

const schemaWithMiddleware = applyMiddleware(schema, ...middleware);

// Chat doesn't work without the listen beint an httpServer setup instead of app. Sending app through httpServer.
const httpServer = createServer(app);

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: {pubsub},
  context: authMiddleware,
});

const subscriptionServer = SubscriptionServer.create({
  schema: schemaWithMiddleware,
  execute,
  subscribe,
}, {
  server: httpServer,
  path: server.graphqlPath,
});

['SIGINT', 'SIGTERM'].forEach(signal => {
  process.on(signal, () => subscriptionServer.close());
});

server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  httpServer.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});