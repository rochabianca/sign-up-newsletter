import React, { Component } from "react";
import "./App.min.css";

import Background from "./components/forms/Background";

class App extends Component {
  render() {
    return (
      <div className="App bg">
        <div className="container">
          <Background />
        </div>
      </div>
    );
  }
}

export default App;
