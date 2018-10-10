import React from "react";
import {
  Modal,
  Layout,
  Button,
  Header,
  Input,
  Textarea
} from "../../dist/donna-ui";
const { Row, Block, Column } = Layout;

export default class PostToFacebook extends React.Component {
  state = {
    title: "",
    text: ""
  };

  constructor(props) {
    super(props);
  }

  onTextChange = text => {
    this.setState({ text });
  };

  onTitleChange = title => {
    this.setState({ title });
  };

  onNext = () => {
    const title = this.state.title;
    const text = this.state.text;
    this.props.onClick({ title, text });
  };

  render() {
    return (
      <Modal>
        <Row>
          <Block>
            <video controls height="520" postr={this.props.poster}>
              <source src={this.props.video} type="video/mp4" />
            </video>
          </Block>
          <Block pad={30} w={320}>
            <Column>
              <div>
                <Header level={3}>Post to Facebook</Header>
                <Input
                  block
                  placeholder="TITLE"
                  onChange={this.onTitleChange}
                />
                <Textarea
                  block
                  placeholder="TEXT"
                  onChange={this.onTextChange}
                />
              </div>
              <div>
                <Button onClick={this.onNext} block>
                  Next
                </Button>
              </div>
            </Column>
          </Block>
        </Row>
      </Modal>
    );
  }
}