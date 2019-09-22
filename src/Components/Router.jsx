import React from "react";
import PropTyles from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
const LogedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed}></Route>
  </>
);
const LogedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth}></Route>
  </>
);
const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LogedInRoutes /> : <LogedOutRoutes />} </Switch>
  </Router>
);
Router.prototypes = {
  isLoggedIn: PropTyles.bool.isRequired
};

export default AppRouter;
