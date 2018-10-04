import React from "react";
import { storiesOf } from "@storybook/react";
import { Modal } from "../dist/donna-ui";

storiesOf("Modals", module).add("modal", () => (
  <Modal>
    <p>
      Adding Alpha Transparency Using our hex color we can do a few things to
      get it to be a little transparent. We can call hsla, rgba, opacify, and
      transparentize. All of them accomplish the same thing, just in different
      ways. I stick to rgba as it comes most naturally to me which takes a color
      and a value from 0 to 1 for the alpha.
    </p>
  </Modal>
));
