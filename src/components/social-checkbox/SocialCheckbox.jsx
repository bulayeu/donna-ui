import React, { Component } from "react";
import "./social-checkbox.scss";

import Label from "../typography/label/Label.jsx";
import Avatar from "../avatar/Avatar.jsx";
import Icon from "../icon/Icon.jsx";

import cn from "classnames";

export default class SocialCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected) this.setState({ selected: this.props.selected })
  }

  select = () => {
    const selected = !this.state.selected;
    this.setState({ selected });
    this.props.onClick(selected);
  };

  render() {
    const clazz = cn("SocialCheckbox", {
      "SocialCheckbox--selected": this.state.selected,
      "SocialCheckbox--block": this.props.block
    });
    return (
      <div role="button" className={clazz} onClick={this.select}>
        <div className="SocialCheckbox__content">
          <Avatar url={this.props.avatar} />
          <Label>{this.props.label}</Label>
          <Icon icon="selected" />
        </div>
      </div>
    );
  }
}
