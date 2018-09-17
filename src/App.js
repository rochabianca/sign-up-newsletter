import React, { Component } from "react";
import "./App.min.css";

import HelloComponent from "./components/forms/HelloComponent";

class App extends Component {
  render() {
    return (
      <div className="App bg">
        <div className="container">
          <HelloComponent />
        </div>
      </div>
    );
  }
}

export default App;
