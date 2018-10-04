import React, { Component } from "react";
import "./modal.scss";

import Button from "../button/Button.jsx";

export default class Modal extends Component {
  render() {
    return (
      <div className={`Modal level-${1}`}>
        <div className="Modal__window">
          <Button>Close</Button>
          <div className="Modal__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
