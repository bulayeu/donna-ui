import React from "react";
import "./text.scss";

const Text = props => (
  <p className={`Text Text--level-${props.level} ${props.center ? "Text--center" : ""}`}>{props.children}</p>
);

Text.defaultProps = { level: 3 };

export default Text;
