import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Thanks extends Component {
  render() {
    return (
      <div className="row">
        <div className="input-box col-sm-5 col-md-6 col-lg-5 col-xl-5 ">
          <h3 className="input-box__title">Thanks for Subscribing</h3>
          <img
            className="thanks__image"
            src="images/thanks.gif"
            alt="Thanks gif"
          />
          <Link className="thanks__link" to="/">
            Return
          </Link>
        </div>
      </div>
    );
  }
}
