import React from "react";
import { storiesOf } from "@storybook/react";
import { Input, Textarea } from "../dist/donna-ui";

storiesOf("Inputs", module)
  .add("input", () => (
    <section className="story">
      <Input initValue="Initial" placeholder="TITLE" />
    </section>
  ))
  .add("textarea", () => (
    <section className="story">
      <Textarea initValue="Initial" placeholder="TEXT" />
      <Textarea max={50} initValue="Initial" placeholder="MAX 50" />
    </section>
  ));
