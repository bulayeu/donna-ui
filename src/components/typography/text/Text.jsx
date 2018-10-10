import React from "react";
import "./text.scss";

import cn from "classnames";

const Text = props => {
  const clazz = cn("Text", `Text--level-${props.level}`, {
    "Text--center": props.center,
    "Text--bold": props.bold,
    "Text--semibold": props.semibold,
    "Text--no-margin": props["no-margin"]
  });
  return <p className={clazz}>{props.children}</p>;
};

Text.defaultProps = { level: 3 };

export default Text;
