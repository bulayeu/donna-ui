import React from "react";

import { storiesOf } from "@storybook/react";

import "./util.scss";

const colors = ["white", "gray", "blue", "dark-blue", "pink"];

storiesOf("Introduction", module)
  .add("default", () => <section>Description</section>)
  .add("variables", () => (
    <section className="story">
      <div>
        {colors.map(c => {
          return <div key={c} className={`color brand-${c}`} />;
        })}
      </div>
    </section>
  ));
