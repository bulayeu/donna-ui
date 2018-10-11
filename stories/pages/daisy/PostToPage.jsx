import React, { Component } from "react";
import {
  Tabs,
  Layout,
  Header,
  Text,
  Button,
  SocialCheckbox,
  Modal
} from "../../../dist/donna-ui";

const { Column, Block, Grid } = Layout;

const pages = [
  {
    id: "1",
    url: "",
    name: "Hello There"
  },
  {
    id: "3",
    url: "",
    name: "Hello There"
  },
  {
    id: "4",
    url: "",
    name: "Hello There"
  },
  {
    id: "7",
    url: "",
    name: "Hello There"
  },
  {
    id: "9",
    url: "",
    name: "Hello There"
  },
  {
    id: "10",
    url: "",
    name: "Hello There"
  },
  {
    id: "1",
    url: "",
    name: "Hello There"
  },
  {
    id: "3",
    url: "",
    name: "Hello There"
  },
  {
    id: "4",
    url: "",
    name: "Hello There"
  },
  {
    id: "7",
    url: "",
    name: "Hello There"
  },
  {
    id: "9",
    url: "",
    name: "Hello There"
  },
  {
    id: "10",
    url: "",
    name: "Hello There"
  }
];

const pages2 = [
  {
    id: "90s",
    url: "",
    name: "Hello There 2"
  },
  {
    id: "100",
    url: "",
    name: "Hello There 2"
  },
  {
    id: "110",
    url: "",
    name: "Hello There 2"
  },
  {
    id: "120",
    url: "",
    name: "Hello There 2"
  },
  {
    id: "130",
    url: "",
    name: "Hello There 2"
  },
  {
    id: "140",
    url: "",
    name: "Hello There 2"
  },
  {
    id: "150",
    url: "",
    name: "Hello There 2"
  },
  {
    id: "160",
    url: "",
    name: "Hello There"
  },
  {
    id: "170",
    url: "",
    name: "Hello There"
  },
  {
    id: "180",
    url: "",
    name: "Hello There"
  },
  {
    id: "190",
    url: "",
    name: "Hello There"
  },
  {
    id: "200",
    url: "",
    name: "Hello There"
  }
];

export default class PostToPage extends Component {
  commonTab = () => {
    return {
      title: "Connect to Page",
      content: (
        <Block>
          <Column>
            <Header center>
              Choose page where you usually publish your video
            </Header>
            <Text center level={2}>
              You may choose more then one
            </Text>
            {this.commonTabPages(pages)}
          </Column>
        </Block>
      )
    };
  };

  adTab = () => {
    return {
      title: "Connect to Ad Account",
      content: (
        <Block>
          <Column>
            <Header center>Connect to Ad Account</Header>
            <Text center level={2}>
              Select everything you want
            </Text>
            {this.commonTabPages(pages2)}
          </Column>
        </Block>
      )
    };
  };

  onSocialCheckboxClick = page => active => {
    console.log(`${page.id} --- ${active}`);
  };

  commonTabPages = pages => {
    return (
      <div
        style={{
          marginTop: "20px",
          width: "520px",
          maxHeight: "180px",
          overflow: "auto"
        }}
      >
        <Grid>
          {pages.map(page => {
            return (
              <div>
                <SocialCheckbox
                  key={page.id}
                  label={page.name}
                  onClick={this.onSocialCheckboxClick(page)}
                />
              </div>
            );
          })}
        </Grid>
      </div>
    );
  };

  render() {
    return (
      <Modal>
        <Block w={800} pad={40} h={520}>
          <Column>
            <Tabs tabs={[this.commonTab(), this.adTab()]} />
            <Block w={280}>
              <Button block>Publish Now</Button>
            </Block>
          </Column>
        </Block>
      </Modal>
    );
  }
}
