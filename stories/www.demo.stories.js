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
  Textarea,
  Avatar
} from "../dist/donna-ui";
const { Row, Block, Column } = Layout;

storiesOf("Demo", module)
  .add("screen_2", () => {
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
  .add("confirmation_pop_up", () => {
    return (
      <Modal showCloseButton={false}>
        <Header level={3}>Well Done!</Header>
        <Text pad={30}>
          Your Video is being processed by Facebook.
          <br />
          Facebook will notify you once it is ready
        </Text>
        <Button block>OK</Button>
      </Modal>
    );
  })
  .add("screen_3", () => {
    return (
      <Modal>
        <Block w={360} h={250} center>
          <Block>
            <Column>
              <Header level={3}>Post to Facebook</Header>
              <Input block placeholder="TITLE" />
              <Textarea block placeholder="TEXT" />
              <Button block>Next</Button>
            </Column>
          </Block>
        </Block>
      </Modal>
    );
  })
  .add("screen_1", () => {
    return (
      <Modal>
        <Block center w={580} h={350}>
          <Block w={410} h={230}>
            <Column>
              <Block center>
                <Avatar url="https://via.placeholder.com/50x50/navyblue/fff" />
                <Icon icon="promo" />
              </Block>
              <Block center>
                <Text center>
                  Promo application would like to manage your pages, publish as
                  webs that you are managing and get access to your stats
                </Text>
              </Block>
              <Block center>
                <Button type="transparent-blue" icon="edit">
                  Choose on what you agree
                </Button>
              </Block>
              <Block center>
                <Block w={200} h={50}>
                  <Button block type="gray">
                    Cancel
                  </Button>
                </Block>
                <Block w={200} h={50}>
                  <Button block>OK</Button>
                </Block>
              </Block>
            </Column>
          </Block>
        </Block>
      </Modal>
    );
  })
  .add("video 1x2", () => {
    return (
      <Modal>
        <Row>
          <Block>
            <video controls>
              <source src="./video/1_2.mp4" type="video/mp4" />
            </video>
          </Block>
          <Block pad={20} w={320}>
            <Column>
              <Header level={3}>Post to Facebook</Header>
              <Input block placeholder="TITLE" />
              <Textarea block placeholder="TEXT" />
              <Button block>Next</Button>
            </Column>
          </Block>
        </Row>
      </Modal>
    );
  })
  .add("video 16x9", () => {
    return (
      <Modal>
        <Row>
          <Block>
            <video controls>
              <source src="./video/16_9.mp4" type="video/mp4" />
            </video>
          </Block>
          <Block pad={20} w={320}>
            <Column>
              <Header level={3}>Post to Facebook</Header>
              <Input block placeholder="TITLE" />
              <Textarea block placeholder="TEXT" />
              <Button block>Next</Button>
            </Column>
          </Block>
        </Row>
      </Modal>
    );
  })
  .add("video 1x1", () => {
    return (
      <Modal>
        <Row>
          <Block>
            <video controls>
              <source src="./video/1_1.mp4" type="video/mp4" />
            </video>
          </Block>
          <Block pad={20} w={320}>
            <Column>
              <Column>
                <Header level={3}>Post to Facebook</Header>
                <Input block placeholder="TITLE" />
                <Textarea block placeholder="TEXT" />
              </Column>
              <Button block>Next</Button>
            </Column>
          </Block>
        </Row>
      </Modal>
    );
  });
