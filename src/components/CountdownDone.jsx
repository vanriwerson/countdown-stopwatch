import React, { Component } from 'react';
import './CountdownDone.css'

class CountdownDone extends Component {
  render() {
    return(
      <div className="countdown-done-container">
        <h1>Back to work!!!</h1>
        <iframe
          src="https://giphy.com/embed/BpGWitbFZflfSUYuZ9"
          title="Back to work meme"
          className="meme"
        />
      </div>
    );
  }
}

export default CountdownDone;
