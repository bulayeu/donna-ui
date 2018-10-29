import React, {Component} from "react";
import PropTypes from "prop-types";
import Slider from "../common/slider.component.jsx";

import "./edit-creative-slider.scss";

class EditCreativeSlider extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    min: 0,
    max: 100,
    value: null
  };

  onChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    const {title, min, max, value} = this.props;
    return (
      <div className="edit-creative-slider">
        <div className="slider-title">{title}</div>
        <Slider min={min} max={max} value={value} onChange={this.onChange} />
        <div className="percentage-text">{value}%</div>
      </div>
    );
  }
}

export default EditCreativeSlider;
