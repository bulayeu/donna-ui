import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "../typography/label/Label.jsx";
import Icon from "../icon/Icon.jsx";
import "./button.scss";

import cn from "classnames";

export default class Button extends Component {
  calculcateClasses() {
    return cn(
      "Button",
      `Button--${this.props.type}`,
      `Button--${this.props.size}`,
      {
        "Button--block": this.props.block,
        "Button--link": this.props.link
      }
    );
  }

  asReference = () => {
    return (
      <a
        href={this.props.href}
        disabled={this.props.disabled}
        className={this.calculcateClasses()}
      >
        <span className="Button__content">
          {this.renderIcon()}
          {this.renderLabel()}
        </span>
      </a>
    );
  };

  asButton = () => {
    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        className={this.calculcateClasses()}
      >
        <span className="Button__content">
          {this.renderIcon()}
          {this.renderLabel()}
        </span>
      </button>
    );
  };

  renderIcon = () => {
    return this.props.icon ? <Icon icon={this.props.icon} /> : null;
  };

  renderLabel = () => <Label>{this.props.children}</Label>;

  render() {
    return this.props.href ? this.asReference() : this.asButton();
  }
}

const BUTTON_BLUE = "blue";
const BUTTON_GRAY = "gray";
const BUTTON_PINK = "pink";
const BUTTON_OUTLINE_GRAY = "outline-gray";
const BUTTON_TRANSPARENT_BLUE = "transparent-blue";
const BUTTON_TRANSPARENT_GRAY = "transparent-gray";
const BUTTON_TRANSPARENT_DARK_GRAY = "transparent-dark-gray";

const BUTTON_SIZE_SMALL = "sm";
const BUTTON_TYPE_MEDIUM = "md";
const BUTTON_TYPE_LARGE = "lg";

const BUTTON_TYPES = [
  BUTTON_BLUE,
  BUTTON_GRAY,
  BUTTON_PINK,
  BUTTON_OUTLINE_GRAY,
  BUTTON_TRANSPARENT_BLUE,
  BUTTON_TRANSPARENT_GRAY,
  BUTTON_TRANSPARENT_DARK_GRAY
];

const BUTTON_SIZES = [BUTTON_SIZE_SMALL, BUTTON_TYPE_MEDIUM, BUTTON_TYPE_LARGE];

Button.propTypes = {
  type: PropTypes.oneOf(BUTTON_TYPES),
  size: PropTypes.oneOf(BUTTON_SIZES),
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: BUTTON_BLUE,
  size: BUTTON_TYPE_MEDIUM,
  disabled: false
};
