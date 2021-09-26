import React from 'react';

export default class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            time: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time += 1
            }))
        }, 1000)
    }

    render() {
        return (
            <div>
                <h3>
                    i've been runnning for: {this.state.time}
                </h3>
                <button onClick={this.handleClick}>
                    Click to start
                </button>
            </div>
        )
    }

}