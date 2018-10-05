import React from "react";
import { storiesOf } from "@storybook/react";
import { Modal, Layout, Button, Icon } from "../dist/donna-ui";

storiesOf("Modals", module)
  .add("modal", () => (
    <Modal>
      <Layout.Row>
        <Layout.Block>
          Adding Alpha Transparency Using our hex color we can do a few things
          to get it to be a little transparent. We can call hsla, rgba, opacify,
          and transparentize. All of them accomplish the same thing, just in
          different ways. I stick to rgba as it comes most naturally to me which
          takes a color and a value from 0 to 1 for the alpha.
        </Layout.Block>
      </Layout.Row>
    </Modal>
  ))
  .add("modal with content", () => (
    <Modal>
      <Layout.Row>
        <Layout.Block>
          <Icon icon="youtube" />
          <Icon icon="twitter" />
        </Layout.Block>
        <Layout.Block>
          <Layout.Column>
            <Icon icon="facebook" />
            <Icon icon="facebook" />
            <Button>Simple Blue Button</Button>
            <Button>Simple Pink Button</Button>
            <Layout.Row>
              <Button>Simple Blue Button</Button>
              <Button type="pink">Simple Pink Button</Button>
            </Layout.Row>
          </Layout.Column>
        </Layout.Block>
      </Layout.Row>
    </Modal>
  ));
