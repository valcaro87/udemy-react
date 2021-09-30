import React from 'react';
import TimerButton from './Timer/TimerButton';
import { TimerHeader } from './Timer/TimerHeader';

export default class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            time: 0,
            isStarted: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        console.log('component did mount');
        this.timer = setInterval(
            () => this.startTimer(),
            1000)
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