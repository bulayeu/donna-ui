import React, { Component } from "react";
import "./avatar.scss";

export default class Avatar extends Component {
  render() {
    const url = this.props.url;
    return (
      <div className="Avatar">
        <div style={{ backgroundImage: `url(${url})` }} className="Avatar__image" />
      </div>
    );
  }
}
