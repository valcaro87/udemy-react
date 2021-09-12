import React from 'react';

export class NameList extends React.Component {

    nameMapper(nameArray) {
        return nameArray.map((name, i) =>
            <li key={i}> {name} </li>
        )
    }

    render() {
        const nameArray = ["valx chris 1987", "axl2019!", "grey2012", "caro", "caro!"]
        return (
            <div style={redbg}>
                <Welcome fname="chris" lname="caro" />
                <Welcome fname="val axl" lname="caro" />
                <ul>
                    {this.nameMapper(nameArray)}
                </ul>

            </div>
        )
    }
}

//const hello = <h3>im an h3 </h3>
const Welcome = ((props) => {
    return (
        <div>
            <h3> Welcome  {props.fname}</h3>
            <h3> {props.lname}</h3>
        </div>
    )
})

const redbg = {
    'backgroundColor': 'red',
    'font-size': 20
};
