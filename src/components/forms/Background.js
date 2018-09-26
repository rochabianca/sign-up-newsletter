import React, { Component } from "react";
import InputBox from "../templates/InputBox";
class Background extends Component {
  render() {
    return (
      <div className="row">
        <InputBox title="Sign up to Our Newsletter" value="next" />
        <InputBox title="It's That Right?" value="Confirm" />
      </div>
    );
  }
}

export default Background;
