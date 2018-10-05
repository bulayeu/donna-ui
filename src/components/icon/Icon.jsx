import React, { Component } from "react";
import "./icon.scss";

import PropTypes from "prop-types";

import facebook from "../../assets/social/facebook.png";
import twitter from "../../assets/social/twitter.png";
import instagram from "../../assets/social/instagram.png";
import youtube from "../../assets/social/youtube.png";
import linkedin from "../../assets/social/linkedin.png";

import close from "../../assets/icons/close.png";

const icons = {
  facebook,
  twitter,
  instagram,
  youtube,
  linkedin,
  close
};

export default class Icon extends Component {
  render() {
    return (
      <span className={`Icon icon-${this.props.icon}`}>
        <img draggable={false} src={icons[this.props.icon]} />
      </span>
    );
  }
}

Icon.defaultProps = {
  icon: "default"
};

Icon.propTypes = {
  icon: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "youtube",
    "linkedin",
    "close",
    "default"
  ])
};
