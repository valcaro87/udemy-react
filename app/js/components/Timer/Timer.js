import React from 'react';
import TimerButton from './TimerButton';
import { TimerHeader } from './TimerHeader';
import { browserHistory } from 'react-router';

export default class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      time: 0,
      isStarted: false,
      gotData: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    // pretend - fetch data from external API
    // if successful, update gotData to TRUE
    this.setState({
      gotData: true
    })
  }

  componentDidMount() {
    console.log('component did mount');
    this.timer = setInterval(
      () => this.startTimer(),
      1000)
    // browserHistory.push('/namelist');
    if (!this.state.gotData) {
      browserHistory.push('/');
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  startTimer() {
    this.setState(prevState => ({
      time: prevState.time += 1
    }))
    this.setState({
      isStarted: true
    })

  }

  stopTimer() {
    clearInterval(this.timer)
    this.setState({
      isStarted: false
    })
  }

  handleClick() {
    this.state.isStarted ?
      this.stopTimer() :
      this.timer = setInterval(
        () => this.startTimer(),
        1000)
  }

  render() {
    return (
      <div>
        <TimerHeader time={this.state.time} />
        <TimerButton handleClick={this.handleClick} isStarted={this.state.isStarted} />
      </div>
    )
  }
}
