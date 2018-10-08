import React, { Component } from "react";
import "./input.scss";

import Label from "../typography/label/Label.jsx";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.initValue || "" };
  }

  handleChange = ev => {
    this.setState({ value: ev.target.value });
  };

  render() {
    return (
      <div className={`Input ${this.props.block ? "Input--block" : ""}`}>
        <div className="Input__label">
          <Label>{this.props.placeholder}</Label>
        </div>
        <input
          className="Input__field"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
