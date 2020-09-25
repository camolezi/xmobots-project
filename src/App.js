import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Views
import LoginView from "./Views/LoginView.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/home">
          <h1>HOME</h1>
        </Route>

        <Route exact path="/login">
          <LoginView />
        </Route>

        <Route exact path="/signup">
          SIGNUP
        </Route>

        <Route>404 not found</Route>
      </Switch>
    </Router>
  );
}

export default App;
