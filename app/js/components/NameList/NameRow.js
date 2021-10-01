import React from 'react';


export default class NameRow extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li key={this.props.name.id}>
                <a href="#" onClick={this.props.handleClickName}>
                    {this.props.name.first_name} {this.props.name.last_name} - {this.props.name.gender} - {this.props.name.email}
                </a>
            </li>
        )
    }

}