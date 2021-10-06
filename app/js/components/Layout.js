import React from 'react';
import Button from './Button';
import { Link, IndexLink } from 'react-router';
import NavLinks from './NavLinks';

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
        const style = {
            backgroundColor: 'red',
            // fontSize: '2em'
        }
        return (
            <div >
                <header>
                    <h1 style={style}>Welcome to my site</h1>
                    <p>im inside the header</p>

                    <NavLinks to="/" linkname="Home" />
                    <span> | </span>
                    <NavLinks to="/timer" linkname="Timer" />
                    <span> | </span>
                    <NavLinks to="/namelist" linkname="NameList" />


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

