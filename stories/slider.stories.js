import React from "react";
import {storiesOf} from "@storybook/react";
import {Slider, EditCreativeSlider} from "../dist/donna-ui";

storiesOf("Slider", module)
  .add("common", () => (
    <section className="story">
      <Slider />
      <EditCreativeSlider />
    </section>
  ))
  .add("dark", () => (
    <section className="story dark">
      <Slider />
      <EditCreativeSlider />
    </section>
  ));
