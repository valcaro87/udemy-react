import React from 'react';
import Button from './Button';
import { Link } from 'react-router'

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
                <header>
                    <h1>Welcome to my site</h1>
                    <p>im inside the header</p>
                    <Link to="/timer">Timer</Link>
                    <Link to="/namelist">Name List</Link>
                </header>

                {this.props.children}

                <footer>
                    <h5>im the footer </h5>
                </footer>
            </div >
        )
    }

}

const H1styler = (props) => {
    const bluebackground = {
        backgroundColor: "blue"
    }
    return <h1 style={bluebackground}>{props.children}</h1>
}

