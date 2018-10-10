import React from "react";
import { storiesOf } from "@storybook/react";
import { Tabs, Button } from "../dist/donna-ui";

const tabs = [
  {
    title: "Post to Facebook",
    content: <Button>Post to Facebook</Button>
  },
  {
    title: "Post to the Hell",
    content: <Button type="pink">Post to the Hell</Button>
  }
];

storiesOf("Tabs", module).add("tab", () => (
  <section className="story">
    <Tabs tabs={tabs}/>
  </section>
));
