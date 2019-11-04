import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { SignIn } from "./pages/SignIn";
import { ProtectedRoute } from "./components/ProtectedRoute";
import UserContextProvider from "./UserContext";
import { Header } from "./components/Header";
import { Switch, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <UserContextProvider>
      <ApolloProvider client={client}>
        <div id="main">
        <link rel="preload" href="./assets/food.jpg" as="image /" />
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/register" exact component={SignIn} />
            <ProtectedRoute path="/about" component={About} />
          </Switch>
        </div>
      </ApolloProvider>
    </UserContextProvider>
  );
}

export default App;
