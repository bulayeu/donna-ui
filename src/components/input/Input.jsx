import React, { Component } from "react";
import "./input.scss";

import Label from "../typography/label/Label.jsx";
import cn from "classnames";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initValue,
      hasValue: !!this.props.initValue
    };
  }

  handleChange = ev => {
    const value = ev.target.value;
    const hasValue = value && value !== "";
    this.setState({ hasValue, value });
    this.props.onChange(value);
  };

  onFocus = () => {
    this.setState({ focus: true });
  };

  onBlur = () => {
    this.setState({ focus: false });
  };

  render() {
    const clazz = cn("Input", {
      "Input--block": this.props.block,
      "Input--focus": this.state.focus,
      "Input--has-value": this.state.hasValue
    });
    return (
      <div style={this.props.style} className={clazz}>
        <div className="Input__label">
          <Label>{this.props.label}</Label>
        </div>
        <input
          type="text" 
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          className="Input__field"
          type="text"
          ref={c => (this.input = c)}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  onChange: () => {},
  initValue: ""
};
