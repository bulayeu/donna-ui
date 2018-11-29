import React from "react";
import PropTypes from "prop-types";

export default class Dropdown extends React.Component {
  static propTypes = {
    selected: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onSelect: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    };

    this.onSelect = this.onSelect.bind(this);
    this.getLabel = this.getLabel.bind(this);
  }

  /**
   * onSelect  , if change callback the props.onSelect method with the item values
   * @param key - selected item key
   */
  onSelect(key) {
    if (this.state.selected === key) {
      return;
    }

    this.setState({
      selected: key
    });

    const found = this.props.options.find((item) => item.value === key);
    this.props.onSelect(found);
  }

  /**
   * Get the title name of the item list by key value
   */
  getLabel(key) {
    const found = this.props.options.find((item) => item.value === key);
    return found ? found.label : "";
  }

  render() {
    const {selected} = this.state;
    /**
     * Collect the list of the items for the drop down
     */
    const content = this.props.options.map((item) => (
      <div
        key={item.id}
        onClick={() => this.onSelect(item.value)}
        className={`drop-down-item ${
          selected === item.value ? "drop-down-selected-item" : ""
        }`}
      >
        {item.label}
        <div
          key={item.id}
          className={`drop-down-v ${
            selected === item.value ? "v-show" : "v-hide"
          }`}
        />
      </div>
    ));
    /**
     * Rendering the whole drop down
     */
    return (
      <div className="dropdown-component">
        <div className="drop-down-container">
          {this.getLabel(selected)}
          <span className="drop-down-arrow" />
        </div>
        <div className="drop-down-items">{content}</div>
      </div>
    );
  }
}
