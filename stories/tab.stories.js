import React from "react";
import { storiesOf } from "@storybook/react";
import { Tabs, Layout, Header, Text } from "../dist/donna-ui";

const tabs = [
  {
    title: "Post to Facebook",
    content: (
      <Layout.Block>
        <Layout.Column>
          <Header center>
            Choose page where you usually publish your video
          </Header>
          <Text center level={2}>
            You may choose more then one
          </Text>
        </Layout.Column>
      </Layout.Block>
    )
  },
  {
    title: "Post to the Hell",
    content: (
      <Layout.Block>
        <Layout.Column>
          <Header center>Post to Hell page</Header>
          <Text center level={2}>
            Select everything you want
          </Text>
        </Layout.Column>
      </Layout.Block>
    )
  }
];

storiesOf("Tabs", module).add("tab", () => (
  <section className="story">
    <Tabs tabs={tabs} />
  </section>
));
