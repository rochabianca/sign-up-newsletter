import React, { Component } from "react";
import Input from "./Input";

class InputBox extends Component {
  state = {
    name: "",
    email: "",
    link: "",
    error: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  hasError = (item, name) => {
    var errors = false;
    if (item === "" || item === undefined) errors = true;

    if (errors) {
      this.setState({ error: { [name]: `${name} is required` } });
      return true;
    } else {
      this.setState({ error: {} });
      return false;
    }
  };

  onSubmit = async e => {
    e.preventDefault();
    const { name, email } = this.state;
    const { link, history } = this.props;
    this.hasError(email, "email");

    if (!this.hasError(name, "name") && !this.hasError(email, "email")) {
      const newRecipient = {
        name,
        email
      };
      localStorage.setItem("recipient", JSON.stringify(newRecipient));

      this.setState({
        name: "",
        email: ""
      });
      history.push(link);
    }
  };

  componentDidMount() {
    const { confirmName, confirmEmail } = this.props;
    if (!(confirmName === "") && !(confirmEmail === "")) {
      this.setState({
        name: confirmName,
        email: confirmEmail
      });
    }
  }

  render() {
    const { title, value } = this.props;
    const { name, email, error } = this.state;

    return (
      <div className="input-box col-sm-5 col-md-6 col-lg-5 col-xl-5 ">
        <h3 className="input-box__title">{title}</h3>
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
            label="E-mail"
            name="email"
            placeholder="Your E-mail"
            value={email}
            type="email"
            onChange={this.onChange}
            error={error.email}
          />
          <input
            type="submit"
            value={value}
            className="button button__submit"
          />
        </form>
      </div>
    );
  }
}

export default InputBox;
