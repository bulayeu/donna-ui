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

const small_icons = ["close", "edit", "fb", "lock", "promo"];

const white_icons = ["plus"];

const icons = storiesOf("Icons", module)
  .add("social", () => (
    <section className="story space-between">
      {social_icons.map(i => (
        <div className="icon-and-name" key={i}>
          <span>{i}</span>
          <Icon icon={i} />
        </div>
      ))}
    </section>
  ))
  .add("icons", () => (
    <section className="story space-between">
      {small_icons.map(i => (
        <div className="icon-and-name" key={i}>
          <span>{i}</span>
          <Icon icon={i} />
        </div>
      ))}
    </section>
  ))
  .add("white icons", () => (
    <section className="story dark space-between">
      {white_icons.map(i => (
        <div className="icon-and-name" key={i}>
          <span>{i}</span>
          <Icon icon={i} />
        </div>
      ))}
    </section>
  ));

