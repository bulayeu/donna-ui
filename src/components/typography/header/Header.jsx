import React, { Component } from "react";
import "./header.scss";

export default class Header extends Component {
  render() {
    switch (this.props.level) {
      case 1:
        return <h1 className="Header">{this.props.children}</h1>;
      case 2:
        return <h2 className="Header">{this.props.children}</h2>;
      case 3:
        return <h3 className="Header">{this.props.children}</h3>;
      case 4:
        return <h4 className="Header">{this.props.children}</h4>;
    }
  }
}

Header.defaultProps = {
  level: 1
};
