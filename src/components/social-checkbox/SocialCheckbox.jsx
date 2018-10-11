import React, { Component } from "react";
import "./social-checkbox.scss";

import Label from "../typography/label/Label.jsx";
import Avatar from "../avatar/Avatar.jsx";
import Icon from "../icon/Icon.jsx";

import cn from "classnames";

export default class SocialCheckbox extends Component {
  constructor(props) {
    super(props);
    const state = {
      selected: this.props.selected
    };
    this.state = state;
  }

  select = () => {
    const selected = !this.state.selected;
    this.setState({ selected });
    this.props.onClick(selected);
  };

  render() {
    const clazz = cn("SocialCheckbox", {
      "SocialCheckbox--selected": this.state.selected
    });
    return (
      <div className={clazz} onClick={this.select}>
        <div className="SocialCheckbox__content">
          <Avatar url={this.props.avatar} />
          <Label>{this.props.label}</Label>
          <Icon icon="selected" />
        </div>
      </div>
    );
  }
}
