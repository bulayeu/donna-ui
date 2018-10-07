import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon, Avatar } from "../dist/donna-ui";

const icons = ["facebook", "instagram", "youtube", "linkedin", "twitter"];

storiesOf("Icons", module).add("social", () => (
  <section>
    {icons.map(i => (
      <Icon icon={i} />
    ))}
  </section>
))
