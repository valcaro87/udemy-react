import React from 'react';
// import Button from './Button';
import Header from './Header/Header';
import Footer from './Footer/Footer';

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
            <div>
                <Header />

                {this.props.children}

                <Footer />
            </div>

        )
    }

}

const H1styler = (props) => {
    const bluebackground = {
        backgroundColor: "blue"
    }
    return <h1 style={bluebackground}>{props.children}</h1>
}

