import React from 'react';
import Button from './Button';
import Timer from './Timer';


export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: 'chris',
            lname: 'caro'
        }
    }

    changeName() {
        console.log(this);
        this.setState({
            fname: 'val'
        })
    }

    render() {
        return (
            <div >
                <h1> {this.state.fname} </h1>
                <p>
                    lorem ipsum
                </p>
                <Button changeName={this.changeName.bind(this)} fname={this.state.fname} />
                <Timer />
                <Timer />
            </div >
        )


    }

}
