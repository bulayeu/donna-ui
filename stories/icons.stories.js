import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon } from "../dist/donna-ui";

const icons = ["facebook", "instagram", "youtube"];

storiesOf("Icons", module).add("social", () => (
  <div>
    {icons.map(i => (
      <Icon icon={i} />
    ))}
  </div>
));
