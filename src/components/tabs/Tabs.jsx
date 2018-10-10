import React, { Component } from "react";
import "./tabs.scss";

// export default TabsWrapper;

export default class Tabs extends Component {
  state = {
    selectedIndex: 0
  };

  constructor(props) {
    super(props);
  }

  openTab = selectedIndex => () => {
    this.setState({ selectedIndex });
  };

  renderTabContent = () => {
    return (
      <div className="Tab__content">
        {this.props.tabs[this.state.selectedIndex].content}
      </div>
    );
  };

  renderTabBar = () => {
    return (
      <div className="Tab__bar">
        {this.props.tabs.map(this.renderTabBarItem)}
      </div>
    );
  };

  renderTabBarItem = (tab, index) => {
    return <span onClick={this.openTab(index)}>{tab.title || "Unknown"}</span>;
  };

  render() {
    return (
      <div className="Tabs">
        {this.renderTabBar()}
        {this.renderTabContent()}
      </div>
    );
  }
}
