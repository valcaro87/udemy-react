import React from 'react';
// import Welcome from './Welcome';

// export class NameList extends React.Component {

//     nameMapper(nameArray) {
//         return nameArray.map((name, i) =>
//             <li key={i}> {name} </li>
//         )
//     }

//     render() {
//         const nameArray = [1, "axl2019!", "grey2012 (val christian grey caro)", "caro", "caro!", "val axl sy caro"]
//         const elementz = <p>i am an element!</p>

//         return (
//             <div style={redbg}>
//                 <h3>i am number {this.props.number}</h3>
//                 <Welcome fname="wala lang A" lname="caro" number={this.props.number} elementz={elementz} />
//                 <Welcome fname="valchris" lname="caro" number={this.props.number} elementz={elementz} />
//                 <ul>
//                     {this.nameMapper(nameArray)}
//                 </ul>

//             </div>
//         )
//     }
// }

// const redbg = {
//     'backgroundColor': 'red',
//     'fontSize': 20
// };


export default class NameList extends React.Component {
    constructor() {
        super();
        this.state = {
            names: [],
            event: 'no event detected'
        }
        this.handleClickName = this.handleClickName.bind(this);
    }

    componentWillMount() {
        this.setState({
            names: this.props.names
        })
    }

    handleClickName(event) {
        event.preventDefault();
        console.log(event.target.text);
        this.setState({
            // event: event.target.value
            event: event.target.text
        })
    }

    render() {
        let { names } = this.state
        return (
            <div>
                <h1>this is the namelist component</h1>

                <h3> {this.state.event}</h3>
                <input onChange={this.handleClickName} type="text" />

                <form onSubmit={this.handleClickName}>
                    <input type="text" />
                    <input type="submit" />
                </form>

                {names.map((name) =>
                    <ul key={name.id}>
                        <li>
                            <a href="#" onClick={this.handleClickName}>
                                {name.first_name} {name.last_name} - {name.gender} - {name.email}
                            </a>
                        </li>
                    </ul>)
                }
            </div>


        )
    }
}
