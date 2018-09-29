import React, { Component } from "react";
import InputBox from "../templates/InputBox";
class EmailForm extends Component {
  render() {
    return (
      <div className="row">
        <InputBox
          title="Sign up to Our Newsletter"
          value="next"
          link="/confirm"
          history={this.props.history}
        />
      </div>
    );
  }
}

export default EmailForm;
