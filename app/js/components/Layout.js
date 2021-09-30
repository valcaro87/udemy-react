import React from 'react';
import Button from './Button';
import Timer from './Timer';
import NameList from './NameList';


export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: 'chris',
            lname: 'caro',
            isTimerMounted: true
        }
    }

    changeName() {
        console.log(this);
        this.setState({
            fname: 'val'
        })
    }

    ToggleTimers() {
        this.setState(prevState => ({
            isTimerMounted: !prevState.isTimerMounted
        }))
    }

    render() {
        return (
            <div >
                <h1> {this.state.fname} </h1>
                <p>
                    lorem ipsumz!2021!
                </p>
                <Button changeName={this.changeName.bind(this)} fname={this.state.fname} />
                {this.state.isTimerMounted ?
                    <div>
                        <Timer />
                        <Timer />
                        <Timer />
                    </div>
                    : null
                }

                <button onClick={this.ToggleTimers.bind(this)}> Toggle Timers</button>

                <NameList names={this.props.names} />

            </div >
        )


    }

}
