import React from 'react';

export default class TimerButton extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <button onClick={this.props.handleClick}>
                    {this.props.isStarted ? 'Stop' : 'Start'}
                </button>
            </div>
        )
    }

}