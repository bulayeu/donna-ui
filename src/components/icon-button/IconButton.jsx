import React, { Component } from "react";
import "./icon-button.scss";

import Icon from "../icon/Icon.jsx";

export default class IconButton extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        className={`IconButton IconButton--${this.props.type}`}
      >
        <Icon icon={this.props.icon} size={this.props.size} />
      </div>
    );
  }
}

IconButton.defaultProps = {
  type: "plain",
  size: "md"
};
