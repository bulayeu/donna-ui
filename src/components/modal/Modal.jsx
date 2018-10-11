import React, { Component } from "react";
import "./modal.scss";

import cn from "classnames";

import IconButton from "../icon-button/IconButton.jsx";

export default class Modal extends Component {
  state = {
    open: false
  };

  constructor(props) {
    super(props);
  }

  close = () => {
    this.setState({
      open: false
    });
  };

  componentDidMount() {
    this.setState({ open: true });
  }

  render() {
    const clazz = cn("Modal", {
      "Modal--transparent": this.props.transparent,
      "Modal--open": this.state.open
    });
    return (
      <div className={clazz}>
        <div className="Modal__window">
          {this.props.showCloseButton && (
            <IconButton onClick={this.close} size="md" icon="close" />
          )}
          <div className="Modal__content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  showCloseButton: true
};
