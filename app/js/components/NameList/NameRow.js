import React from 'react';
import { Link } from 'react-router';


export default class NameRow extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { first_name, last_name, id, gender, email } = this.props.name;

        return (
            <li key={this.props.name.id}>
                {/* <a href="#" onClick={this.props.handleClickName}> */}
                {/* {this.props.name.first_name} {this.props.name.last_name} - {this.props.name.gender} - {this.props.name.email} */}
                {/* </a> */}

                <Link to={`/namelist/${id}`}>
                    {first_name} {last_name} - {gender} - {email}
                </Link>
            </li>
        )
    }

}