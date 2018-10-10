import React, { Component } from "react";
import "./avatar.scss";
import Icon from "../icon/Icon.jsx";

export default class Avatar extends Component {
  render() {
    const url = this.props.url;
    const style = { backgroundImage: `url(${url})` };
    return (
      <div className="Avatar ">
        {url 
          ? <div style={style} className="Avatar__image" />
          : <Icon icon="avatar" size="md" />
        }
      </div>
    );
  }
}
