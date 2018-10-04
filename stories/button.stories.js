import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "../dist/donna-ui";
import { withInfo } from "@storybook/addon-info";

const buttons = ["pink", "white", "transparent", "blue", "link"];

storiesOf("Button", module)
  .add("default", () => (
    <section className="dark">
      {buttons.map(b => (
        <Button key={b} onClick={action("clicked")} type={b}>
          Button
        </Button>
      ))}
      <Button href='hello'>
          Button
        </Button>
    </section>
  ))
  .add(
    "disabled",
    withInfo(`
      Some info    
    `)(() => (
      <section className="dark">
        {buttons.map(b => (
          <Button disabled type={b}>
            Button
          </Button>
        ))}
      </section>
    ))
  )
