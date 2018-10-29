import React, {Component} from "react";
import PropTypes from "prop-types";
import IconButton from "../icon-button/IconButton.jsx";

class Checkbox extends Component {
  static propTypes = {
    isChecked: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    isChecked: false
  };

  render() {
    const {onClick} = this.props;
    return (
      <IconButton
        size="sm"
        onClick={onClick}
        icon={this.props.isChecked ? "checked" : "unchecked"}
      />
    );
  }
}

export default Checkbox;
