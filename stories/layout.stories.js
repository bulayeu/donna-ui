import React from "react";
import { storiesOf } from "@storybook/react";
import { Layout } from "../dist/donna-ui";

const { Block, Column, Row } = Layout;

storiesOf("Layout", module).add("layout", () => (
  <section className="story">
    <Block>
      <Row>
        <div className="grid-item" />
        <div className="grid-item" />
      </Row>
    </Block>

    <Column>
      <div className="grid-item" />
      <div className="grid-item" />
    </Column>

    <Block horizontal="center" vertical="center">
      <Column>
        <div className="grid-item" />
        <div className="grid-item" />
        <div className="grid-item" />
        <div className="grid-item" />
      </Column>
    </Block>
  </section>
));
