import React from "react";
import { storiesOf } from "@storybook/react";
import { Avatar } from "../dist/donna-ui";

storiesOf("Avatar", module).add("avatar", () => (
  <section className="story">
    <Avatar url="https://via.placeholder.com/50x50/navyblue/fff" />
  </section>
));
