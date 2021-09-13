import React from 'react';
import Welcome from './Welcome';

export class NameList extends React.Component {

    nameMapper(nameArray) {
        return nameArray.map((name, i) =>
            <li key={i}> {name} </li>
        )
    }

    render() {
        const nameArray = ["valx chris", "axl2019!", "grey2012 (val christian grey caro)", "caro", "caro!", "val axl sy caro"]

        return (
            <div style={redbg}>
                <h3>i am number {this.props.number}</h3>
                <Welcome fname="chris" lname="caro" number={this.props.number} />
                <Welcome fname="val axl" lname="caro" number={this.props.number} />
                <ul>
                    {this.nameMapper(nameArray)}
                </ul>

            </div>
        )
    }
}

const redbg = {
    'backgroundColor': 'red',
    'font-size': 20
};
