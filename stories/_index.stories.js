import React from "react";

import { storiesOf } from "@storybook/react";

import { Header, Layout } from "../dist/donna-ui";
import "./util.scss";

const basic = ["black", "white"];
const mainBlue = ["blue", "blue-75", "blue-50", "blue-25"];
const mainDarkBlue = [
  "dark-blue",
  "dark-blue-75",
  "dark-blue-50",
  "dark-blue-25",
  "dark-blue-15",
  "dark-blue-5"
];
const accent = ["pink", "red"];
const additional = ["yellow", "purple"];

const colorsView = (colors, title) => {
  return (
    <div>
      {title && <Header level={3}>{title}</Header>}
      <div className="colors">{colors.map(colorView)}</div>
    </div>
  );
};

const colorView = color => {
  return <div key={color} className={`color ${color}`} />;
};

const colors = [
  "blue",
  "blue-75",
  "blue-50",
  "blue-25",
  "gray",
  "blue",
  "dark-blue",
  "pink"
];

storiesOf("Introduction", module)
  .add("default", () => <section className="story">Description</section>)
  .add("colors", () => (
    <section className="story">
      {colorsView(mainBlue, "Main")}
      {colorsView(mainDarkBlue)}
      {colorsView(accent, "Additional")}
      {colorsView(additional, "Accent")}
      {colorsView(basic, "Basic")}
    </section>
  ));
