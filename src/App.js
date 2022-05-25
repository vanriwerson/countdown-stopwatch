import React, { Component } from 'react';
import Counter from "./components/Counter";
import Controls from "./components/Controls";
import Inputs from "./components/Inputs";
import './App.css';
import CountdownDone from './components/CountdownDone';

class App extends Component {
  state = {
    minutes: '0',
    seconds: '0',
    totalTimeInSeconds: 0,
    running: false,
    isCountdownDone: false,
    hideInputs: false,
  }
  
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  setTotalTimeInSeconds = () => {
    const { minutes, seconds } = this.state;
    const sexagesimal = 60;
    const convertMinutes = Number(minutes) * sexagesimal;
    const totalTimeInSeconds = convertMinutes + Number(seconds);

    return totalTimeInSeconds;
  }

  runTimer = () => {
    this.setState(({ running: true, hideInputs: true }), this.startCountdown);
  }

  startCountdown = () => {
    const { running } = this.state;
    console.log(running);
  }

  resetCountdown = () => {
    window.location.reload();
  }

  render() {
    const { minutes, seconds, running, isCountdownDone } = this.state;
    return (
      <div className="counter-container">
        {(running && !isCountdownDone) && (
          <Counter
            minutes={ minutes.toString().padStart(2, '0') }
            seconds={ seconds.toString().padStart(2, '0') }
          />
        )}
        {isCountdownDone && <CountdownDone />}
        {(!running && !isCountdownDone) && (
          <div>
            <h1>Set your break time:</h1>
            <Inputs
              minutes={ minutes }
              seconds={ seconds }
              onInputChange={ this.handleChange }
            />
          </div>
        )}
        <Controls
          startCountdown={ this.startCountdown }
          resetCounter={ this.resetCountdown }
        />
      </div>
    );
  }
}

export default App;
