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
  ))
  .add("font weights", () => (
    <section className="story">
      <p className="font-100">
        <pre>font-weight: 100</pre> Well, to be truthful the blueprint's
      </p>
      <p className="font-200">
        <pre>font-weight: 200</pre> Simply rage and youthful exuberance
      </p>
      <p className="font-300">
        <pre>font-weight: 300</pre> Everybody loves to root for a nuisance
      </p>
      <p className="font-400">
        <pre>font-weight: 400</pre> Hit the Earth like an asteroid
      </p>
      <p className="font-500">
        <pre>font-weight: 500</pre> Did nothing but shoot for the Moon since
        (Pew!)
      </p>
      <p className="font-600">
        <pre>font-weight: 600</pre> MC's get taken to school with this music
      </p>
      <p className="font-700">
        <pre>font-weight: 700</pre> 'Cause I use it as a vehicle to "bust a
        rhyme"
      </p>
      <p className="font-800">
        <pre>font-weight: 800</pre> Now I lead a new school full of students
      </p>
      <p className="font-900">
        <pre>font-weight: 900</pre> Me? I'm a product of Rakim
      </p>
    </section>
  ));
