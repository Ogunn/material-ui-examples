import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PaperGroup from "./components/PaperGroup";
import BasicGrid from "./components/BasicGrid";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/paper-group">PaperGroup</Link>
          </li>
          <li>
            <Link to="/basic-grid">BasicGrid</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/paper-group">
          <PaperGroup />
        </Route>
        <Route path="/basic-grid">
          <BasicGrid />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
