import React from "react";
import { storiesOf } from "@storybook/react";
import { Header, Modal, Layout, Button, Icon } from "../dist/donna-ui";

const header = <Header level={2}>Header is here</Header>
const footer = <Header level={4}>Footer is here</Header>

storiesOf("Modals", module).add("modal", () => (
  <Modal header={header} footer={footer}>
    <Layout.Block w={520} h={240} pad={50} center>
      Adding Alpha Transparency Using our hex color we can do a few things to
      get it to be a little transparent. We can call hsla, rgba, opacify, and
      transparentize. All of them accomplish the same thing, just in different
      ways. I stick to rgba as it comes most naturally to me which takes a color
      and a value from 0 to 1 for the alpha.
    </Layout.Block>
  </Modal>
));
