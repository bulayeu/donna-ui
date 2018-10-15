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

// import PerfectScrollbar from "react-perfect-scrollbar";

// // eslint-disable-next-line
// // import ScrollBar from 'react-perfect-scrollbar';
// // eslint-disable-next-line
// import 'react-perfect-scrollbar/dist/css/styles.css';

const { Column, Block, Grid, ScrollBlock } = Layout;

const data1 = [
  {
    id: "5bbf375ef871157d5d9b8e42",
    thumbnail:
      "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
    label: "COMVERGES"
  },
  {
    id: "5bbf375e1788802549038466",
    thumbnail:
      "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
    label: "ANDRYX"
  },
  {
    id: "5bbf375eec82fbb26a6bf40d",
    thumbnail:
      "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
    label: "EPLODE"
  },
  {
    id: "5bbf375eb925eb475de3e16c",
    thumbnail:
      "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
    label: "TWIGGERY"
  },
  {
    id: "5bbf375ea3d1ccd72acb423d",
    thumbnail:
      "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
    label: "SIGNITY"
  },
  {
    id: "5bbf375edcbbefe4b51ac3c7",
    thumbnail:
      "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
    label: "VORTEXACO"
  },
  {
    id: "5bbf375eb4a2b85d690371b0",
    thumbnail:
      "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
    label: "ECRATER"
  },
  {
    id: "5bbf375e610786acd871b615",
    thumbnail:
      "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
    label: "FLOTONIC"
  },
  {
    id: "5bbf375e540352e2d03dcb06",
    thumbnail:
      "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
    label: "SHEPARD"
  },
  {
    id: "5bbf375e6a7ae9199408c126",
    thumbnail:
      "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
    label: "SOLAREN"
  }
];

const pages2 = [
  {
    id: "90s",
    url: "",
    label: "Hello There 2"
  },
  {
    id: "100",
    url: "",
    label: "Hello There 2"
  },
  {
    id: "110",
    url: "",
    label: "Hello There 2"
  },
  {
    id: "120",
    url: "",
    label: "Hello There 2"
  },
  {
    id: "130",
    url: "",
    label: "Hello There 2"
  },
  {
    id: "140",
    url: "",
    label: "Hello There 2"
  },
  {
    id: "150",
    url: "",
    label: "Hello There 2"
  },
  {
    id: "160",
    url: "",
    label: "Hello There"
  },
  {
    id: "170",
    url: "",
    label: "Hello There"
  },
  {
    id: "180",
    url: "",
    label: "Hello There"
  },
  {
    id: "190",
    url: "",
    label: "Hello There"
  },
  {
    id: "200",
    url: "",
    label: "Hello There"
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
            {this.commonTabPages(data1)}
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
      <Block w={520} center>
        <ScrollBlock>
          <div style={{ padding: "0px 20px", height: "180px" }}>
            <Grid>
              {pages.map(page => {
                return (
                  <SocialCheckbox
                    block
                    key={page.id}
                    label={page.label}
                    onClick={this.onSocialCheckboxClick(page)}
                  />
                );
              })}
            </Grid>
          </div>
        </ScrollBlock>
      </Block>
    );
  };

  render() {
    return (
      <Modal>
        <Block w={710} pad={40} h={520}>
          <Column>
            <Tabs tabs={[this.commonTab(), this.adTab()]} />
            <Block w={260}>
              <Button block onClick={this.props.onPublish}>
                Publish Now
              </Button>
            </Block>
          </Column>
        </Block>
      </Modal>
    );
  }
}
