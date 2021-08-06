import "./App.css";
import { Navigation, Footer } from "./Components";
import {
  Home,
  About,
  TopBrands,
  Login,
  SignUp,
  Bids,
  Chatroom,
  Checkout,
  Support,
  RecentlySold,
  Profile,
} from "./Pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";

import { Provider } from "react-redux";
import store from "./utils/state/store";
const httpLink = createHttpLink({
  uri: "/graphql",
});

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
  link: authLink.concat(httpLink),
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
              <Route exact path="/chatroom" component={Chatroom} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/support" component={Support} />
              <Route exact path="/recentlysold" component={RecentlySold} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
