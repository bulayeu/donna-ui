import React from "react";
import { storiesOf } from "@storybook/react";

import { Text, Header } from "../dist/donna-ui";

storiesOf("Typography", module)
  .add("text", () => (
    <section className="story">
      <Text level={1}>Text 1</Text>
      <Text level={2}>Text 2</Text>
      <Text level={3}>Text 3</Text>
    </section>
  ))
  .add("headers", () => (
    <section className="story">
      <Header level={1}>Header 1</Header>
      <Header level={2}>Header 2</Header>
      <Header level={3}>Header 3</Header>
      <Header level={4}>Header 4</Header>
    </section>
  ));
