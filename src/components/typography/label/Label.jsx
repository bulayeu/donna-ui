import React, { Component } from "react";
import "./label.scss";

export default class Label extends Component {
  render() {
    return <span className="Label">{this.props.children}</span>;
  }
}
