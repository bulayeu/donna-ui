import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "../dist/donna-ui";

const buttons = ['pink', 'white', 'transparent', 'blue', 'link'];

storiesOf("Button", module)
  .add("default", () => (
    <section className="dark">
      {buttons.map((b) => <Button onClick={action('clicked')} type={b}>Button</Button>)}
    </section>
  ))
  .add("disabled", () => (
    <section className="dark">
      {buttons.map((b) => <Button disabled type={b}>Button</Button>)}
    </section>
  ))