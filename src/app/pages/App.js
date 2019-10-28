import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home/index';
import Page1 from './Page1/index';
import Page2 from './Page2/index';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Page1</Link>
          </li>
          <li>
            <Link to="/dashboard">Page2</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Page1 />
          </Route>
          <Route path="/dashboard">
            <Page2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}