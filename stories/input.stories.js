import React from "react";
import {storiesOf} from "@storybook/react";
import {Input, Textarea, Checkbox, Dropdown } from "../dist/donna-ui";

storiesOf("Inputs", module)
  .add("input", () => (
    <section className="story">
      <Input initValue="Initial" label="Title" placeholder="Add title here" />
    </section>
  ))
  .add("textarea", () => (
    <section className="story">
      <Textarea initValue="Initial" placeholder="Add text here" label="Text" />
      <Textarea max={50} initValue="Initial" label="Text" placeholder="Add text here" />
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
