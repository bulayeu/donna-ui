import React, {Component} from "react";
import "./textarea.scss";

import autosize from "autosize";

import Label from "../typography/label/Label.jsx";

import cn from "classnames";

export default class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initValue,
      hasValue: !!this.props.initValue
    };
  }

  componentDidMount() {
    autosize(this.textarea);
  }

  componentWillUnmount() {
    autosize.destroy(this.textarea);
  }

  handleChange = (ev) => {
    const value = ev.target.value;
    if (this.props.max && value.length > this.props.max) {
      this.setState({highlightIndicator: true});
    } else {
      const hasValue = value && value !== "";
      this.setState({value, hasValue, highlightIndicator: false});
      this.props.onChange(value);
    }
  };

  onFocus = () => {
    this.setState({focus: true, highlightIndicator: false});
  };

  onBlur = () => {
    this.setState({focus: false, highlightIndicator: false});
  };

  render() {
    const clazz = cn("Textarea", {
      "Textarea--block": this.props.block,
      "Textarea--focus": this.state.focus,
      "Textarea--has-value": this.state.hasValue,
      "Textarea--show-indicator": this.props.max && this.props.max / this.state.value.length < 2,
      "Textarea--highlight-indicator": this.state.highlightIndicator
    });
    return (
      <div style={this.props.style} className={clazz}>
        <div className="Textarea__label">
          <Label>{this.props.label}</Label>
        </div>
        <textarea
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={(c) => (this.textarea = c)}
          className="Textarea__field"
          value={this.state.value}
          type="text"
          onChange={this.handleChange}
          rows="1"
          placeholder={this.props.placeholder}
        />
        <div className="Textarea__indicator">
          {this.state.value.length} / {this.props.max}
        </div>
      </div>
    );
  }
}

Textarea.defaultProps = {
  onChange: () => {},
  initValue: "",
  max: 0
};
