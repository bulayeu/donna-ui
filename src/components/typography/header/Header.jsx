import React, { Component } from "react";
import "./header.scss";

import cn from "classnames";

const Header = props => {
  let header = null;
  const clazz = cn("Header", `Header--level-${props.level}`, {
    "Header--center": props.center,
    "Header--no-margin": props["no-margin"]
  });
  switch (props.level) {
    case 1:
      header = <h1 className={clazz}>{props.children}</h1>;
      break;
    case 2:
      header = <h2 className={clazz}>{props.children}</h2>;
      break;
    case 3:
      header = <h3 className={clazz}>{props.children}</h3>;
      break;
    case 4:
      header = <h4 className={clazz}>{props.children}</h4>;
      break;
    case 5:
      header = <h5 className={clazz}>{props.children}</h5>;
      break;
  }
  return header;
};

Header.defaultProps = {
  level: 3
};

export default Header;
