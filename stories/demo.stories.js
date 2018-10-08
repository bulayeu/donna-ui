import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Modal,
  Layout,
  Button,
  Icon,
  Text,
  Header,
  Input,
  Textarea
} from "../dist/donna-ui";
const { Row, Block, Column } = Layout;

storiesOf("Demo", module)
  .add("facebook one", () => {
    return (
      <Modal>
        <Block center pad={30} w={520}>
          <Column>
            <Block center pad={30}>
              <Icon icon="promo" />
            </Block>
            <Text level={3}>Promo application is requestiong allowence:</Text>
            <Text level={3}>Your public profile JonhDoe@address.com</Text>
            <Block w={200}>
              <Column>
                <Button block type="transparent-blue" icon="edit">
                  Edit
                </Button>
                <Button block>Continue as Jonh Doe</Button>
                <Button block type="transparent-gray">
                  Cancel
                </Button>
              </Column>
            </Block>
            <Text>
              <Icon icon="lock" />
              Application will be allowed to publish on Facebook
            </Text>
            <Button href="#" type="transparent-blue">
              Terms and Conditions
            </Button>
          </Column>
        </Block>
      </Modal>
    );
  })
  .add("Well Done!", () => {
    return (
      <Modal showCloseButton={false}>
        <Block center pad={30}>
          <Column>
            <Header level={3}>Well Done!</Header>
            <Text pad={30}>
              Your Video is being processed by Facebook.
              <br />
              Facebook will notify you once it is ready
            </Text>
            <Block />
            <Block w={200}>
              <Button block>OK</Button>
            </Block>
          </Column>
        </Block>
      </Modal>
    );
  })
  .add("video", () => {
    return (
      <Modal>
        <Block w={340} pad={30}>
          <Column>
            <Header level={3}>Post to Facebook</Header>
            <Input block placeholder="TITLE" />
            <Textarea block placeholder="TEXT" />
            <Button block>Next</Button>
          </Column>
        </Block>
      </Modal>
    );
  });
