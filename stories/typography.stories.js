import React from "react";
import { storiesOf } from "@storybook/react";

import { Text } from "../dist/donna-ui";

storiesOf("Typography", module).add("text", () => (
  <section>
    <Text>Daylight</Text>
    <Text>I wake up feeling like you won't play right</Text>
    <Text>I used to know, but now that shit don't feel right</Text>
  </section>
));
