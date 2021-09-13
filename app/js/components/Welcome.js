import React from 'react';

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h3> Welcome  {this.props.fname} {this.props.lname} Number: {this.props.number}</h3>
            </div>
        )

    }
}