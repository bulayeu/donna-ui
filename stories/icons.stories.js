import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon, Header, Layout } from "../dist/donna-ui";

// import assets from "../src/components/icon/icons.js";

// const assetsNames = Object.keys(assets);

const social_icons = [
  "facebook",
  "instagram",
  "youtube",
  "linkedin",
  "twitter"
];

const small_icons = [
  "close",
  "pen",
  "avatar",
  "add",
  "alert",
  "selected",
  "arrow",
  "arrow_back"
];

const Grid = Layout.Grid;

const iconsTable = (icons, size) => {
  return (
    <Grid size={6}>
      {icons.map(icon => (
        <Grid size={2}>
          <div>{icon}</div>
          <Icon size={size} icon={icon} />
        </Grid>
      ))}
    </Grid>
  );
};

const icons = storiesOf("Icons", module)
  .add("social", () => (
    <section className="story">
      <Header>Small icons</Header>
      {iconsTable(social_icons, "sm")}
      <Header>Medium icons</Header>
      {iconsTable(social_icons, "md")}
      <Header>Large icons</Header>
      {iconsTable(social_icons, "lg")}
    </section>
  ))
  .add("icons", () => (
    <section className="story">
      <Header>Small icons</Header>
      {iconsTable(small_icons, "sm")}
      <Header>Medium icons</Header>
      {iconsTable(small_icons, "md")}
      <Header>Large icons</Header>
      {iconsTable(small_icons, "lg")}
    </section>
  ));
