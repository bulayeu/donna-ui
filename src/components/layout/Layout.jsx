import React from "react";
import "./layout.scss";

import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';

const Block = props => {
  const style = {};
  if (props.w) {
    style.width = `${props.w}px`;
    style.miWidth = `${props.w}px`;
  }
  if (props.h) style.height = `${props.h}px`;
  if (props.pad) style.padding = `${props.pad}px`;
  return (
    <div
      style={style}
      className={`Block ${props.center ? "Block--center" : ""}`}
    >
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

const Grid = props => {
  return (
    <div className={`Grid Grid--size-${props.size}`}>{props.children}</div>
  );
};

const ScrollBlock = props => {
  return <div className="ScrollBlock"><PerfectScrollbar>{props.children}</PerfectScrollbar></div>
};

Grid.defaultProps = {
  size: 2
};

const Layout = { Block, Row, Column, Grid, ScrollBlock };

export default Layout;
