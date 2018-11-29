import React from "react";
import {storiesOf} from "@storybook/react";
import {Input, Textarea, Checkbox, Dropdown } from "../dist/donna-ui";

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
  ))
  .add("dropdown", () => (
    <section className="story">
      <Dropdown options={[{value: 'id1', label: 'Option 1'}]}/>
    </section>
  ))
  .add("checkbox", () => (
    <section className="story">
      <Checkbox
        onClick={() => {
          alert("checked");
        }}
        isChecked={true}
      />
      <br />
      <Checkbox
        onClick={() => {
          alert("unchecked");
        }}
        isChecked={false}
      />
    </section>
  ));
