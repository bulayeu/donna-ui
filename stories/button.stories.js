import React from "react";

import { storiesOf } from "@storybook/react";

import { Button, IconButton, Icon } from "../dist/donna-ui";
import { withInfo } from "@storybook/addon-info";

const buttonTypes = [
  "blue",
  "gray",
  "pink",
  "transparent-blue",
  "transparent-gray",
  "transparent-dark-gray"
];

storiesOf("Button", module)
  .add(
    "default",
    withInfo(`
    Default buttons    
  `)(() => (
      <section className="story">
        {buttonTypes.map(b => (
          <Button key={`default_${b}`} type={b}>
            {`Button ${b}`}
          </Button>
        ))}
      </section>
    ))
  )
  .add(
    "disabled",
    withInfo(`
      Some info    
    `)(() => (
      <section className="story">
        {buttonTypes.map(b => (
          <Button key={`disabled_${b}`} disabled type={b}>
            {`Button disabled ${b}`}
          </Button>
        ))}
      </section>
    ))
  )
  .add(
    "button with icon",
    withInfo(`
      Some info    
    `)(() => (
      <section className="story">
        <Button icon="edit" type="transparent-blue">
          Button with Icon
        </Button>

        <Button icon="lock" type="transparent-gray">
          Button with Icon
        </Button>

        <Button icon="lock" type="transparent-dark-gray">
          Button with Icon
        </Button>

        <Button icon="plus">Button with Icon</Button>
      </section>
    ))
  )
  .add(
    "icon button",
    withInfo(`
      Some info    
    `)(() => (
      <section className="story">
        <IconButton icon="facebook" />
        <IconButton icon="close" />
        <IconButton type="round" icon="close" />
      </section>
    ))
  );
