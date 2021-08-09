import './App.css';
import { Navigation, Footer, AuctionSubmitForm }from './Components'
import { Home, About, TopBrands, Login, SignUp, Bids, Chatroom, Checkout, Support, RecentlySold, Profile } from './Pages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from '@apollo/client/utilities';
import { Provider } from 'react-redux';
import store from './utils/state/store';
require('dotenv').config()

const httpLink = createHttpLink({
  uri: "/graphql",
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:3001/graphql",
  options: {
    reconnect: true
  }
});

// This divides the links so they do share the same link on line 48. This prevents conflicts from the websocket, and allows for queries
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/bids" component={Bids} />
              <Route path="/about" component={About} />
              <Route path="/brands" component={TopBrands} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route path="/bids/:bid" component={Chatroom} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/support" component={Support} />
              <Route exact path="/recentlysold" component={RecentlySold} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/auctionform" component={AuctionSubmitForm} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
