import React, { Component } from "react";
import { Router } from "react-router-dom";
import Routes from "./Routes";
import browserHistory from "./helpers/history";

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Routes />
      </Router>
    );
  }
}
