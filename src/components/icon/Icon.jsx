import React, { Component } from "react";
import "./icon.scss";

import PropTypes from "prop-types";

// SOCIAL ICONS
import facebook from "../../assets/social/facebook.png";
import twitter from "../../assets/social/twitter.png";
import instagram from "../../assets/social/instagram.png";
import youtube from "../../assets/social/youtube.png";
import linkedin from "../../assets/social/linkedin.png";

// SMALL ICONS
import close from "../../assets/icons/close.png";
import edit from "../../assets/icons/edit.png";
import fb from "../../assets/icons/facebook.png";
import lock from "../../assets/icons/lock.png";
import plus from "../../assets/icons/plus.png";
import promo from "../../assets/icons/promo.png";

const icons = {
  facebook,
  twitter,
  instagram,
  youtube,
  linkedin,
  close,
  edit,
  fb,
  lock,
  plus,
  promo
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

const ICON_TYPES = Object.keys(icons);

Icon.propTypes = {
  icon: PropTypes.oneOf(ICON_TYPES)
};
