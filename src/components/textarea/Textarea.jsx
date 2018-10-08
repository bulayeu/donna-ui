import React, { Component } from "react";
import "./textarea.scss";

import autosize from "autosize";

import Label from "../typography/label/Label.jsx";

export default class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.initValue || "" };
  }

  componentDidMount() {
    autosize(this.textarea);
  }

  componentWillUnmount() {
    autosize.destroy(this.textarea);
  }

  handleChange = ev => {
    this.setState({ value: ev.target.value });
  };

  render() {
    return (
      <div className={`Textarea ${this.props.block ? "Textarea--block" : ""}`}>
        <div className="Textarea__label">
          <Label>{this.props.placeholder}</Label>
        </div>
        <textarea
          ref={c => (this.textarea = c)}
          className="Textarea__field"
          value={this.state.value}
          type="text"
          onChange={this.handleChange}
          rows="1"
        />
      </div>
    );
  }
}
