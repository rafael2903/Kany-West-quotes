import React from "react";
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

import "./styles.css";

export default function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="">
            <PageNotFound/>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}
