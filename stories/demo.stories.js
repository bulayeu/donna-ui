import React from "react";
import { storiesOf } from "@storybook/react";
import { Layout, Button, API } from "../dist/donna-ui";
const { Row, Block, Column } = Layout;

import PostToFacebookPage from "./pages/PostToFacebookPage.jsx";
import WellDone from "./pages/daisy/WellDone.jsx";
import PostToPage from "./pages/daisy/PostToPage";

import Daisy from "./pages/daisy/Daisy.jsx";

storiesOf("__Demo", module)
  .add("daisy", () => {
    return (
      <div>
        <Button
          onClick={() => {
            API.modal.mount(<Daisy />);
          }}
        >
          Open
        </Button>
      </div>
    );
  })
  .add("video 1x1", () => {
    return (
      <PostToFacebookPage
        onClick={data => console.log(data)}
        video="./video/1x1.mp4"
      />
    );
  })
  .add("video 16x9", () => {
    return (
      <PostToFacebookPage
        onClick={data => console.log(data)}
        video="./video/16x9.mp4"
      />
    );
  })
  .add("video 9x16", () => {
    return (
      <PostToFacebookPage
        onClick={data => console.log(data)}
        video="./video/9x16.mp4"
      />
    );
  })

  .add("16x9 promo", () => {
    return (
      <PostToFacebookPage
        onClick={data => console.log(data)}
        video="./video/16_9_promo.mp4"
      />
    );
  })
  .add("Well Done!", () => {
    return <WellDone />;
  })
  .add("Publish Now!", () => {
    return <PostToPage />;
  });
