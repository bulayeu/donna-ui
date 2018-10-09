import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon, Avatar } from "../dist/donna-ui";

const social_icons = [
  "facebook",
  "instagram",
  "youtube",
  "linkedin",
  "twitter"
];

const small_icons = ["close", "edit", "fb", "lock", "promo", "placeholder"];

const white_icons = ["plus"];

const iconsTable = icons => {
  return (
    <table className="icons-table">
      <thead>
        <th>Icon name</th>
        <th>Icon image</th>
      </thead>
      {icons.map(i => (
        <tr>
          <td>{i}</td>
          <td>
            <Icon icon={i} />
          </td>
        </tr>
      ))}
    </table>
  );
};

const icons = storiesOf("Icons", module)
  .add("social", () => (
    <section className="story space-between">
      {iconsTable(social_icons)}
    </section>
  ))
  .add("icons", () => (
    <section className="story space-between">{iconsTable(small_icons)}</section>
  ))
  .add("white icons", () => (
    <section className="story dark space-between">
      {iconsTable(white_icons)}
    </section>
  ));
