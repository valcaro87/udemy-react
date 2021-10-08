import React from 'react';
import NameRow from './NameRow';
import names from '../../../../mock-data';

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
            names: names,
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

                {/* <p> Clicked Name: {this.state.event} </p> */}

                {/* <input
                    onChange={this.handleClickName}
                    onFocus={this.handleClickName}
                    onBlur={this.handleClickName}
                    onKeyPress={this.handleClickName}
                    type="text"
                /> */}

                {/* {JSON.stringify(this.state, null)} */}

                Filter Names: <input type="text" onChange={this.filterNames} />
                <div class="pure-g">
                    {names.map((name) =>
                        <NameRow key={name.id} name={name} handleClickName={this.handleClickName} />
                    )}
                </div>
            </div>
        )
    }
}
