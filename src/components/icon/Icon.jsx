import React, { Component } from "react";
import "./icon.scss";

import PropTypes from "prop-types";
import icons from "./icons.js";

const Icon = props => {
  return (
    <span className={`Icon Icon--${props.icon} Icon--size-${props.size}`}>
      <img draggable={false} src={icons[props.icon]} />
    </span>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons))
};

Icon.defaultProps = {
  icon: "avatar",
  size: "sm"
};

export default Icon;
