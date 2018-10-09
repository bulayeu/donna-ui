import React from "react";
import { storiesOf } from "@storybook/react";
import { Avatar, SocialCheckbox } from "../dist/donna-ui";

storiesOf("Avatar", module)
  .add("avatar", () => (
    <section className="story">
      <Avatar url="./images/square.png" />
    </section>
  ))
  .add("social checkbox", () => (
    <section className="story">
      <SocialCheckbox
        label="Hello"
        url="https://via.placeholder.com/50x50/navyblue/fff"
      />
      <SocialCheckbox
        selected
        label="Hello"
        url="https://via.placeholder.com/50x50/navyblue/fff"
      />
    </section>
  ));
