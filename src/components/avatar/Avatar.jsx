import React, { Component } from "react";
import "./avatar.scss";

export default class Avatar extends Component {
  render() {
    const url = this.props.url;
    const style = { backgroundImage: `url(${url})` };
    return (
      <div className="Avatar">
        <div style={style} className="Avatar__image" />
      </div>
    );
  }
}
