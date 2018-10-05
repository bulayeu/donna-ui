import React, { Component } from "react";
import PropTypes from "prop-types";
import "./button.scss";

export default class Button extends Component {
  calculcateClasses() {
    return `Button Button--${this.props.type}`;
  }

  asReference() {
    return (
      <a
        href={this.props.href}
        disabled={this.props.disabled}
        className={this.calculcateClasses()}
      >
        <span className="Label">{this.props.children}</span>
      </a>
    );
  }

  asButton() {
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
    return this.props.href ? this.asReference() : this.asButton();
  }
}

const TYPE_WHITE = "white";
const TYPE_BLUE = "blue";
const TYPE_TRANSPARENT = "transparent";
const TYPE_LINK = "link";
const TYPE_RED = "pink";

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
  disabled: false
};
