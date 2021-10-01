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
        this.filterNames = this.filterNames.bind(this);
    }

    componentWillMount() {
        this.setState({
            names: this.props.names,
            filterText: ''
        })
    }

    handleClickName(event) {
        event.preventDefault();
        console.log(event.target.text);
        this.setState({
            // event: event.target.value
            event: event.target.text
            //event: event.type
        })
    }

    filterNames(event) {
        // let newNames = this.state.names.filter((name) => {
        //     let fullName = `${name.first_name} ${name.last_name}`
        //     return fullName.toLowerCase().includes(event.target.value.toLowerCase())
        // })

        this.setState({
            filterText: event.target.value
        })
    }

    render() {
        let { names } = this.state
        let { filterText } = this.state;

        if (filterText.length >= 3) {
            names = names.filter((name) => {
                let fullName = `${name.first_name} ${name.last_name}`
                return fullName.toLowerCase().includes(event.target.value.toLowerCase())
            })
        }


        return (
            <div>
                <h1>this is the namelist component</h1>

                <p> Clicked Name: {this.state.event} </p>

                <input
                    onChange={this.handleClickName}
                    onFocus={this.handleClickName}
                    onBlur={this.handleClickName}
                    onKeyPress={this.handleClickName}
                    type="text"
                />

                <form onSubmit={this.handleClickName}>
                    <input type="text" />
                    <input type="submit" />
                </form>

                <br />
                <br />
                <div>
                    {/* {JSON.stringify(this.state, null)} */}
                </div>

                Filter Names: <input type="text" onChange={this.filterNames} />

                <ul>
                    {names.map((name) =>
                        <li key={name.id}>
                            <a href="#" onClick={this.handleClickName}>
                                {name.first_name} {name.last_name} - {name.gender} - {name.email}
                            </a>
                        </li>
                    )}
                </ul>
            </div>


        )
    }
}
