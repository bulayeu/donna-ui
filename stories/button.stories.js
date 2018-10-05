import React from "react";

import { storiesOf } from "@storybook/react";

import { Button, IconButton } from "../dist/donna-ui";
import { withInfo } from "@storybook/addon-info";

const buttons = ["pink", "white", "transparent", "blue", "link"];

storiesOf("Button", module)
.add(
  "default",
  withInfo(`
    Default buttons    
  `)(() => (
    <section className="dark">
      {buttons.map(b => (
        <Button key={`default_${b}`} type={b}>
          Button
        </Button>
      ))}
    </section>
  ))
).add(
    "disabled",
    withInfo(`
      Some info    
    `)(() => (
      <section className="dark">
        {buttons.map(b => (
          <Button key={`disabled_${b}`} disabled type={b}>
            Button
          </Button>
        ))}
      </section>
    ))
  ).add(
    "icon button",
    withInfo(`
      Some info    
    `)(() => (
      <section>
        <IconButton icon='facebook' />
        <IconButton icon='close' />
        <IconButton type='round' icon='close' />
      </section>
    ))
  );

