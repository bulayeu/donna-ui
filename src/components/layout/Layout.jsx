import React from "react";
import "./layout.scss";

const Block = props => {
  return <div className="Block Block--center">{props.children}</div>;
};

const Row = props => {
  return <div className="Row">{props.children}</div>;
};
const Column = props => {
  return <div className="Column">{props.children}</div>;
};

const Layout = { Block, Row, Column };

export default Layout;
