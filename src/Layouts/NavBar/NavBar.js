import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Body from "Layouts/Body/Body";
import SearchPage from "Components/SearchPage/SearchPage";
import ResultsPage from "Components/ResultsPage/ResultsPage";

export const NavBar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/searchPage">SearchPage</Link>
            </li>
            <li>
              <Link to="/resultsPage">ResultsPage</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route component={Body} exact path="/" />
          <Route component={SearchPage} exact path="/searchPage" />
          <Route component={ResultsPage} exact path="/resultsPage" />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
