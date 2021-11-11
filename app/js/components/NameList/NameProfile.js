import React from 'react';
import { browserHistory, Link } from 'react-router';
import { namelist } from './namelist.css';
import names from '../../../../mock-data';

export default class NameProfile extends React.Component {
  constructor() {
    super();
    this.clickHandler.bind(this);
  }

  componentWillMount() {
    let { id } = this.props.params;
    console.log('type of: ' + typeof id);
    this.user = names.find((name) =>
      name.id === +id
    )
    //console.log(this.user.first_name);
  }

  clickHandler() {
    browserHistory.push('/namelist')
  }

  render() {
    let user = this.user;
    if (user) {
      user =
        <div>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email} </p>
          <p>City: {user.city}</p>
          <p>Catch Phrase: {user.catch_phrase}</p>
        </div>
    }
    else {
      user = <h2>User Not found</h2>
    }

    return (
      <div>
        {user}
        <button onClick={this.clickHandler}> Back to Name List </button>
        <Link to="/namelist"> Back to Name List </Link>
      </div>
    )
  }
}
