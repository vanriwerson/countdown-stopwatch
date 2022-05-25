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
    interval: 0,
    running: false,
    isCountdownDone: false,
    oneMinute: 60,
  }
  
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  updateCounter = () => {
    const interval = setInterval(() => {
      const { totalTimeInSeconds, oneMinute } = this.state;
      const minutes = Math.floor(totalTimeInSeconds / oneMinute);
      const seconds = totalTimeInSeconds % oneMinute;

      if (totalTimeInSeconds === 0) {
        this.setState({ isCountdownDone: true });
      } else {
        this.setState((prevState) => ({
          minutes,
          seconds,
          totalTimeInSeconds: prevState.totalTimeInSeconds - 1,
        }));
      }
    }, 1000);

    this.setState((prevState) => ({
      ...prevState,
      interval,
    }));
  }

  startCountdown = () => {
    const { minutes, seconds, oneMinute } = this.state;
    const convertMinutes = Number(minutes) * oneMinute;
    const totalTimeInSeconds = convertMinutes + Number(seconds);

    this.setState(({ totalTimeInSeconds, running: true }), this.updateCounter);
  }

  resetCounter = () => {
    const { interval } = this.state;
    clearInterval(interval);

    this.setState({
      minutes: '0',
      seconds: '0',
      totalTimeInSeconds: 0,
      running: false,
      isCountdownDone: false,
    })
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
          <Inputs
            minutes={ minutes }
            seconds={ seconds }
            onInputChange={ this.handleChange }
          />
        )}
        <Controls
          startCountdown={ this.startCountdown }
          resetCounter={ this.resetCounter }
        />
      </div>
    );
  }
}

export default App;
