import React from 'react';
import Welcome from './Welcome';

export class NameList extends React.Component {

    nameMapper(nameArray) {
        return nameArray.map((name, i) =>
            <li key={i}> {name} </li>
        )
    }

    render() {
        const nameArray = [1, "axl2019!", "grey2012 (val christian grey caro)", "caro", "caro!", "val axl sy caro"]
        const elementz = <p>i am an element!</p>

        return (
            <div style={redbg}>
                <h3>i am number {this.props.number}</h3>
                <Welcome fname="wala lang A" lname="caro" number={this.props.number} elementz={elementz} />
                <Welcome fname="valchris" lname="caro" number={this.props.number} elementz={elementz} />
                <ul>
                    {this.nameMapper(nameArray)}
                </ul>

            </div>
        )
    }
}

const redbg = {
    'backgroundColor': 'red',
    'fontSize': 20
};
