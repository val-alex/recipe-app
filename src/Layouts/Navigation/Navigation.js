import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchPage from "Components/SearchPage/SearchPage";
import ResultsPage from "Components/ResultsPage/ResultsPage";

export const Navigation = () => {
  return (
    <Router basename="/recipe-app">
      <Switch>
        <Route component={SearchPage} exact path="/" />
        <Route component={SearchPage} exact path="/search" />
        <Route component={ResultsPage} exact path="/results" />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default Navigation;
