import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon, Header, Layout } from "../dist/donna-ui";

const social_icons = [
  "facebook",
  "instagram",
  "youtube",
  "linkedin",
  "twitter"
];

const small_icons = ["close", "avatar"];

const Grid = Layout.Grid;

const iconsTable = (icons, size) => {
  return (
    <Grid size={6}>
      {icons.map(icon => [
        <div>{icon}</div>,
        <div>
          <Icon size={size} icon={icon} />
        </div>
      ])}
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
