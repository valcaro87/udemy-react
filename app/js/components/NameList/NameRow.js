import React from 'react';
import { Link } from 'react-router';
import styles from './namelist.css';


export default class NameRow extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { first_name, last_name, id, gender, email } = this.props.name;

    return (
      <div className="pure-u-1 pure-u-md-1-3" key={this.props.name.id}>
        {/* <a href="#" onClick={this.props.handleClickName}> */}
        {/* {this.props.name.first_name} {this.props.name.last_name} - {this.props.name.gender} - {this.props.name.email} */}
        {/* </a> */}

        <Link to={`/namelist/${id}`}>
          <h3>{first_name} {last_name} </h3>
        </Link>
      </div>
    )
  }

}
