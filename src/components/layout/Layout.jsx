import React from "react";
import "./layout.scss";

const Block = props => {
  const style = {};
  if (props.w) style.width = `${props.w}px`;
  if (props.h) style.width = `${props.h}px`;
  if (props.pad) style.padding = `${props.pad}px`;
  return (
    <div style={style} className={`Block ${props.center ? "Block--center" : ""}`}>
      {props.children}
    </div>
  );
};

const Row = props => {
  return <div className="Row">{props.children}</div>;
};
const Column = props => {
  return <div className="Column">{props.children}</div>;
};

const Layout = { Block, Row, Column };

export default Layout;
