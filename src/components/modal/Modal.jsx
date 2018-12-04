import React, {Component} from "react";
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
    this.props.onClose();
    this.setState({
      open: false
    });
  };

  componentDidMount() {
    this.setState({open: true});
    this.props.exposeAPI({
      close: this.close
    });
  }

  render() {
    const clazz = cn("Modal", {
      "Modal--transparent": this.props.transparent,
      "Modal--open": this.state.open
    });
    const { footer, header } = this.props;
    return (
      <div className={clazz}>
        {this.props.showCloseButton && (
          <IconButton onClick={this.close} size="md" icon="close" />
        )}
        <div className="Modal__window" style={this.props.style}>
          <div className="Modal__content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const noop = () => {};

Modal.defaultProps = {
  showCloseButton: true,
  exposeAPI: noop,
  onClose: noop
};
