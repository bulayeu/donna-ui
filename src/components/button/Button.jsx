import React, { Component } from "react";
import PropTypes from "prop-types";
import "./button.scss";

export default class Button extends Component {
  calculcateClasses() {
    return `Button type-${this.props.type} size-${this.props.size}`;
  }

  renderReference() {
    return (
      <a
        href={this.props.href}
        disabled={this.props.disabled}
        className={this.calculcateClasses()}
      >
        {this.props.children}
      </a>
    );
  }

  renderButton() {
    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        className={this.calculcateClasses()}
      >
        {this.props.children}
      </button>
    );
  }

  render() {
    return this.props.href ? this.renderReference() : this.renderButton();
  }
}

const TYPE_WHITE = "white";
const TYPE_BLUE = "blue";
const TYPE_TRANSPARENT = "transparent";
const TYPE_LINK = "link";
const TYPE_RED = "pink";

const SIZE_LG = "lg";
const SIZE_MD = "md";
const SIZE_SM = "sm";

Button.propTypes = {
  type: PropTypes.oneOf([
    TYPE_WHITE,
    TYPE_BLUE,
    TYPE_TRANSPARENT,
    TYPE_LINK,
    TYPE_RED
  ]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: TYPE_BLUE,
  size: SIZE_MD,
  disabled: false
};
