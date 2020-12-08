import React from "react";
import "./FontAwesomeIcon";
import "./App.css";
import Home from "./home/home";
import Portfolio from "./portfolio/portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
