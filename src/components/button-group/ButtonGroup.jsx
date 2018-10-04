import React, { Component } from "react";
import "./button-group.scss";

export default class ButtonGroup extends Component {
  render() {
    return <div className="ButtonGroup">{this.props.children}</div>;
  }
}
