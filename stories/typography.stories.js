import React from "react";
import { storiesOf } from "@storybook/react";

import { Text, Header } from "../dist/donna-ui";

const text = "A red flare silhouetted the jagged edge of a wing.";

storiesOf("Typography", module)
  .add("text", () => (
    <section className="story">
      {[...Array(4).keys()].map(lvl => {
        const level = lvl + 1;
        return (
          <Text key={`text_${level}`} level={level}>
            {text}
          </Text>
        );
      })}
      <hr></hr>
      {[...Array(4).keys()].map(lvl => {
        const level = lvl + 1;
        return (
          <Text semibold key={`text_${level}`} level={level}>
            {text}
          </Text>
        );
      })}
      <hr></hr>
      {[...Array(4).keys()].map(lvl => {
        const level = lvl + 1;
        return (
          <Text bold key={`text_${level}`} level={level}>
            {text}
          </Text>
        );
      })}
    </section>
  ))
  .add("headers", () => (
    <section className="story">
      {[...Array(5).keys()].map(lvl => {
        const level = lvl + 1;
        return (
          <Header key={`header_${level}`} level={level}>
            {text}
          </Header>
        );
      })}
    </section>
  ))
  .add("font weights", () => (
    <section className="story">
      {[300, 400, 600, 700, 800, 900].map(weight => {
        return (
          <div>
            <p>{`font-weight : ${weight}`}</p>
            <p key={`font_${weight}`} className={`font-${weight}`}>
              {text}
            </p>
          </div>
        );
      })}
    </section>
  ));
