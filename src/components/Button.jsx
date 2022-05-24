import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Button.css'

class Button extends Component {
  render() {
    const { onButtonClick, buttonLabel } = this.props
    return(
      <button
        className="command"
        onClick={ onButtonClick }
      >
        { buttonLabel }
      </button>
    )
  }
}

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
}

export default Button;
