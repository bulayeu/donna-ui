import React from "react";
import "./text.scss";

const Text = props => (
  <p className={`Text Text--level-${props.level}`}>{props.children}</p>
);

export default Text;
