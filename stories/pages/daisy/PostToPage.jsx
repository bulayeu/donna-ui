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

const data1 = [
    {
      "id": "5bbf375ef871157d5d9b8e42",
      "thumbnail": "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
      "title": "COMVERGES"
    },
    {
      "id": "5bbf375e1788802549038466",
      "thumbnail": "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
      "title": "ANDRYX"
    },
    {
      "id": "5bbf375eec82fbb26a6bf40d",
      "thumbnail": "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
      "title": "EPLODE"
    },
    {
      "id": "5bbf375eb925eb475de3e16c",
      "thumbnail": "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
      "title": "TWIGGERY"
    },
    {
      "id": "5bbf375ea3d1ccd72acb423d",
      "thumbnail": "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
      "title": "SIGNITY"
    },
    {
      "id": "5bbf375edcbbefe4b51ac3c7",
      "thumbnail": "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
      "title": "VORTEXACO"
    },
    {
      "id": "5bbf375eb4a2b85d690371b0",
      "thumbnail": "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
      "title": "ECRATER"
    },
    {
      "id": "5bbf375e610786acd871b615",
      "thumbnail": "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
      "title": "FLOTONIC"
    },
    {
      "id": "5bbf375e540352e2d03dcb06",
      "thumbnail": "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
      "title": "SHEPARD"
    },
    {
      "id": "5bbf375e6a7ae9199408c126",
      "thumbnail": "https://cdn.dribbble.com/users/182545/screenshots/1514859/art02_1x.png",
      "title": "SOLAREN"
    }
  ]

const pages2 = [
  {
    id: "90s",
    url: "",
    title: "Hello There 2"
  },
  {
    id: "100",
    url: "",
    title: "Hello There 2"
  },
  {
    id: "110",
    url: "",
    title: "Hello There 2"
  },
  {
    id: "120",
    url: "",
    title: "Hello There 2"
  },
  {
    id: "130",
    url: "",
    title: "Hello There 2"
  },
  {
    id: "140",
    url: "",
    title: "Hello There 2"
  },
  {
    id: "150",
    url: "",
    title: "Hello There 2"
  },
  {
    id: "160",
    url: "",
    title: "Hello There"
  },
  {
    id: "170",
    url: "",
    title: "Hello There"
  },
  {
    id: "180",
    url: "",
    title: "Hello There"
  },
  {
    id: "190",
    url: "",
    title: "Hello There"
  },
  {
    id: "200",
    url: "",
    title: "Hello There"
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
              <SocialCheckbox
                block
                key={page.id}
                label={page.name}
                onClick={this.onSocialCheckboxClick(page)}
              />
            );
          })}
        </Grid>
      </div>
    );
  };

  render() {
    return (
      <Modal>
        <Block w={710} pad={40} h={520}>
          <Column>
            <Tabs tabs={[this.commonTab(), this.adTab()]} />
            <Block w={260}>
              <Button block onClick={this.props.onPublish}>Publish Now</Button>
            </Block>
          </Column>
        </Block>
      </Modal>
    );
  }
}
