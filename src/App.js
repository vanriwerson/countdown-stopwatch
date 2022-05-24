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
    running: false,
    isCountdownDone: false,
    hideInputs: false,
  }
  
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value })
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
    let totalTimeInSeconds = this.setTotalTimeInSeconds();

    if (running) {
      setInterval(() => {
        const displayMinutes = Math.floor(totalTimeInSeconds / 60);
        const displaySeconds = totalTimeInSeconds % 60;
        
        if(totalTimeInSeconds === 0) {
          this.setState({ running: false, isCountdownDone: true });
        } else {
          this.setState({
            minutes: displayMinutes.toString(),
            seconds: displaySeconds.toString(),
          });
          totalTimeInSeconds -= 1;
        }
      }, 1000);
    }
  }

  resetState = () => {
    window.location.reload();
  }

  render() {
    const { minutes, seconds, running, isCountdownDone, hideInputs } = this.state;
    return (
      <div className="counter-container">
        {(running && isCountdownDone === false) && (
          <Counter
            minutes={ minutes.toString().padStart(2, '0') }
            seconds={ seconds.toString().padStart(2, '0') }
          />
        )}
        {isCountdownDone && <CountdownDone />}
        {hideInputs === false && (
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
          startCountdown={ this.runTimer }
          resetCounter={ this.resetState }
        />
      </div>
    );
  }
}

export default App;
