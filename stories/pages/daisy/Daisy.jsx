import React from "react";
import ReactDOM from "react-dom";

import PostToFacebook from "../PostToFacebookPage";
import SocialPage from "./PostToPage";
import WellDone from "./WellDone";

export default class Daisy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "post"
    };
  }

  onNext = data => {
    this.setState({ data, step: "social" }, () => {});
  };

  onPublish = data => {
    this.setState({ step: "message" });
  };

  onOk = data => {
    ReactDOM.unmountComponentAtNode(this.daisy.parentNode);
  };

  postPage() {
    return <PostToFacebook post={this.state.post} onNext={this.onNext} />;
  }

  socialPage() {
    return <SocialPage post={this.state.post} onPublish={this.onPublish} />;
  }

  messagePage() {
    return <WellDone onOk={this.onOk} />;
  }

  render() {
    const step = this.state.step;
    return (
      <div ref={c => (this.daisy = c)} className="Daisy">
        {step === "post" && this.postPage()}
        {step === "social" && this.socialPage()}
        {step === "message" && this.messagePage()}
      </div>
    );
  }
}
