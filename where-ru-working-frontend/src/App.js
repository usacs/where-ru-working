import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./components/Map.js";
import Entry from "./components/Entry.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Map} />
          <Route path="/addintern" component={Entry} />
        </Switch>
      </Router>
    );
  }
}

export default App;
