// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    elapsedTimer: 0,
    isTimerRunning: false,
  }

  compoundWillUnmount = () => {
    clearInterval(this.intervalId)
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({elapsedTimer: 0, isTimerRunning: false})
  }

  setTimer = () => {
    const {elapsedTimer} = this.state

    const minutes = Math.floor(elapsedTimer / 60)
    const seconds = Math.floor(elapsedTimer % 60)

    const min = minutes > 9 ? minutes : `0${minutes}`
    const sec = seconds > 9 ? seconds : `0${seconds}`

    return `${min}:${sec}`
  }

  onStartTimer = () => {
    this.intervalId = setInterval(this.onUpdateTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  onUpdateTimer = () => {
    this.setState(prevState => ({elapsedTimer: prevState.elapsedTimer + 1}))
  }

  render() {
    const {isTimerRunning} = this.state
    const updateTime = this.setTimer()

    return (
      <div className="bg-container">
        <div className="container">
          <h1>Stopwatch</h1>
          <div className="content-container">
            <div className="timer-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="icon"
              />
              <p className="icon-label">Timer</p>
            </div>
            <h1 className="timer">{updateTime}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="button"
                disabled={isTimerRunning}
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="button1"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button2"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
