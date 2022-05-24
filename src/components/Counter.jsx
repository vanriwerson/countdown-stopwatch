import React, { Component } from "react";
import PropTypes from "prop-types";
import './Counter.css'

class Counter extends Component {
  render() {
    const { minutes, seconds } = this.props;
    return(
      <p className="counter-display">
        <span>{ minutes }</span>
        <span>:</span>
        <span>{ seconds }</span>
      </p>
    )
  }
}

Counter.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
}

export default Counter;
