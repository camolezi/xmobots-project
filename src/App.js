import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Views
import LoginView from "./Views/LoginView.js";
import MainPageView from "./Views/MainPage/MainPageView.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/home">
          <MainPageView />
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
