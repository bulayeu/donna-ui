import React from "react";
import { Modal, Layout, Button, Header, Text } from "../../../dist/donna-ui";
const { Row, Block, Column } = Layout;

export default class WellDone extends React.Component {
  render() {
    return (
      <Modal showCloseButton={false}>
        <Block w={360} h={250} center>
          <Block w={280} h={170}>
            <Column>
              <Header no-margin center level={3}>
                Well Done!
              </Header>
              <Text no-margin center level={2}>
                Your Video is being processed by Facebook.
                <br />
                Facebook will notify you once it is ready
              </Text>
              <Block w={200}>
                <Button block>OK</Button>
              </Block>
            </Column>
          </Block>
        </Block>
      </Modal>
    );
  }
}
