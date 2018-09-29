import React, { Component } from "react";
import InputBox from "../templates/InputBox";
export default class ConfirmForm extends Component {
  render() {
    const { name, email } = JSON.parse(localStorage.getItem("recipient"));
    return (
      <div className="row">
        <InputBox
          title="It's That Right?"
          value="Confirm"
          link="/thanks"
          confirmName={name}
          confirmEmail={email}
          history={this.props.history}
        />
      </div>
    );
  }
}
