import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

import cn from "classnames";

import IconButton from "../icon-button/IconButton.jsx";

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  close = () => {
    ReactDOM.unmountComponentAtNode(this.modal.parentNode);
  };

  render() {
    const clazz = cn("Modal", `Modal--level-${this.props.level}`, {
      "Modal--transparent": this.props.transparent
    });
    return (
      <div ref={c => (this.modal = c)} className={clazz}>
        <div className="Modal__window">
          {this.props.showCloseButton && (
            <IconButton onClick={this.close} icon="close" />
          )}
          <div className="Modal__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  showCloseButton: true,
  level: 1
};
