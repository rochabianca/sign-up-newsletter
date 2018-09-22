import React, { Component } from "react";
import Input from "./Input";

class InputBox extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    error: {}
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  hasError = (item, name) => {
    var errors = false;
    if (item === "") errors = true;

    if (errors) {
      console.log(item);
      this.setState({ error: { [name]: `${name} is required` } });
      return true;
    } else {
      this.setState({ error: {} });
      return false;
    }
  };

  onSubmit = async e => {
    e.preventDefault();
    const { name, age } = this.state;
    this.hasError(name, "name");
    this.hasError(age, "age");

    if (!this.hasError(name, "name") && !this.hasError(age, "age")) {
      const newRecipient = {
        name,
        age
      };
    }
  };

  render() {
    const { name, age, error } = this.state;
    return (
      <div className="input-box col-sm-5 col-md-6 col-lg-5 col-xl-5 ">
        <h3 className="input-box__title">Sign up to Our Newsletter</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <Input
            label="name"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={this.onChange}
            error={error.name}
          />
          <Input
            label="age"
            name="age"
            placeholder="Your age"
            value={age}
            onChange={this.onChange}
            error={error.age}
          />
          <input type="submit" value="next" className="button button__submit" />
        </form>
      </div>
    );
  }
}

export default InputBox;
