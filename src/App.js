import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.min.css";

import EmailForm from "./components/forms/EmailForm";
import ConfirmForm from "./components/forms/ConfirmForm";
import Thanks from "./components/forms/Thanks";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App bg">
          <div className="container">
            <Route exact path="/" component={EmailForm} />
            <Route exact path="/confirm" component={ConfirmForm} />
            <Route exact path="/thanks" component={Thanks} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
