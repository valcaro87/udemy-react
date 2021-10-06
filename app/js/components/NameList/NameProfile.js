import React from 'react';
import names from '../../../../mock-data';

export default class NameProfile extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        let { id } = this.props.params
        console.log('type of: ' + typeof id);
        this.user = names.find((name) =>
            name.id === +id
        )
        console.log(this.user.first_name);
    }

    render() {
        return (
            <div>
                <p>Name: {this.user.first_name}</p>
                <p>Email: {this.user.email} </p>
                <p>City: {this.user.city}</p>
                <p>Catch Phrase: {this.user.catch_phrase}</p>
            </div>
        )
    }
}