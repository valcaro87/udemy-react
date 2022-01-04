import React from 'react';
import { connect } from 'react-redux';

import NameList from './NameList';
import store from '../../store';
import names from '../../../../mock-data';


// const mapStateToProps = (store) => {
//   return {
//     names: store.names
//   };
// }

class NameListContainer extends React.Component {
  componentDidMount() {
    store.dispatch({ type: 'GET_NAMES', names: names })
  }

  render() {
    return <NameList names={this.props.names} />
  }
}

const mapStateToProps = (store) => {
  return {
    names: store.names
  };
}

export default connect(map.mapStateToProps)(NameListContainer)
