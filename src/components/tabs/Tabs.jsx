import React, { Component } from "react";
import "./tabs.scss";

import cn from "classnames";

import Header from "../typography/header/Header.jsx";

export default class Tabs extends Component {
  state = {
    selectedIndex: 0
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.tabOpened(this.props.tabs[this.state.selectedIndex]);
  }

  openTab = selectedIndex => () => {
    this.tabs.classList.add("Tabs--switch");
    setTimeout(() => {
      this.setState({ selectedIndex }, () => {
        this.tabs.classList.remove("Tabs--switch");
        this.props.tabOpened(this.props.tabs[this.state.selectedIndex]);
      });
    }, 200);
  };

  renderTabContent = () => {
    return (
      <div className="Tab__content">
        <div className="Tab__content-item">
          {this.props.tabs[this.state.selectedIndex].content}
        </div>
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
    const clazz = cn("Tab__nav", {
      "Tab__nav--active": index === this.state.selectedIndex
    });
    return (
      <div
        key={`tab_${tab.title}_${index}`}
        onClick={this.openTab(index)}
        className={clazz}
      >
        <Header level={5}>{tab.title || "Unknown"}</Header>
      </div>
    );
  };

  render() {
    return (
      <div ref={c => (this.tabs = c)} className="Tabs">
        {this.renderTabBar()}
        {this.renderTabContent()}
      </div>
    );
  }
}

Tabs.defaultProps = {
  tabOpened: () => {}
};
