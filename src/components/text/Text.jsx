import React, { Component } from "react";
import "./text.scss";

export default class Text extends Component {
  render() {
    return (
      <p className={`Text ${this.props.level} ${this.props.type}`}>
        {this.props.children}
      </p>
    );
  }
}
