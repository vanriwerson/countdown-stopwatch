import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
import './Controls.css'

class Controls extends Component{
  render() {
    const { startCountdown, resetCounter } = this.props;
    return (
      <div className="controls-container">
        <Button
          onButtonClick={ startCountdown }
          buttonLabel='Run'
        />
        <Button
          onButtonClick={ resetCounter }
          buttonLabel='Reset'
        />
      </div>
    );
  }
}

Controls.propTypes = {
  startCountdown: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
};

export default Controls;
