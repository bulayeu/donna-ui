import React from "react";

import { storiesOf } from "@storybook/react";

import { Button, IconButton, Header, Layout } from "../dist/donna-ui";
import { withInfo } from "@storybook/addon-info";

const buttonTypes = [
  "blue",
  "gray",
  "pink",
  "outline-gray",
  "transparent-blue",
  "transparent-gray",
  "transparent-dark-gray"
];

const basicButtons = ["blue", "gray", "outline-gray"];

storiesOf("Button", module)
  .add("buttons box", () => (
    <section className="story">
      <div className="buttons">
        <Header>Small</Header>
        {basicButtons.map(i => (
          <Button type={i} size="sm">
            Button
          </Button>
        ))}
        <Header>Medium</Header>
        {basicButtons.map(i => (
          <Button type={i} size="md">
            Button
          </Button>
        ))}
        <Header>Large</Header>
        {basicButtons.map(i => (
          <Button type={i} size="lg">
            Button
          </Button>
        ))}
      </div>
    </section>
  ))
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
        <Button icon="avatar" type="transparent-blue">
          Button with Icon
        </Button>

        <Button icon="close" type="transparent-gray">
          Button with Icon
        </Button>

        <Button icon="selected" type="transparent-dark-gray">
          Button with Icon
        </Button>

        <Button icon="pen">Button with Icon</Button>
      </section>
    ))
  )
  .add(
    "icon button",
    withInfo(`
      Some info    
    `)(() => (
      <section className="story">
        <Layout.Grid size={6}>
          <IconButton type="round" icon="facebook" />
          <IconButton type="round" icon="pen" />
          <IconButton type="round" icon="close" />
          <IconButton icon="facebook" />
        </Layout.Grid>
      </section>
    ))
  );
