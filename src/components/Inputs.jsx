import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Inputs.css'

class Inputs extends Component {
  render () {
    const { minutes, seconds, onInputChange } = this.props;
    return (
      <div className='inputs-container'>
        <label className='label' htmlFor='minutes'>
          Min:{' '}
        <input
          className='input'
          type='number'
          name='minutes'
          value={ minutes }
          min={0}
          onChange={ onInputChange }
        />
        </label>
        <label className='label' htmlFor='seconds'>
          Sec:{' '}
        <input
          className='input'
          type='number'
          name='seconds'
          value={ seconds }
          min={0}
          onChange={ onInputChange }
        />
        </label>
      </div>
    )
  }
}

Inputs.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

export default Inputs
