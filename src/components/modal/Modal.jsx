import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

import IconButton from "../icon-button/IconButton.jsx";

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  close = () => {
    ReactDOM.unmountComponentAtNode(this.modal.parentNode);
  };

  render() {
    return (
      <div ref={c => (this.modal = c)} className={`Modal Modal--level-${1}`}>
        <div className="Modal__window">
          <IconButton onClick={this.close} icon="close" />
          <div className="Modal__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
