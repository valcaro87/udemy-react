import React from 'react';
import NavLinks from './NavLinks';
import styles from './header.css';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      backgroundColor: 'red',
      // fontSize: '2em'
    }
    return (
      <div className={`pure-menu pure-menu-horizontal ${styles.nav}`}>
        <NavLinks className="pure-menu-heading pure-menu-link" to="/" linkname="Home" />
        <ul className="pure-menu-list">
          <li className="pure-menu-item"><NavLinks className="pure-menu-link" to="/timer" linkname="Timer" /></li>
          <li className="pure-menu-item"><NavLinks className="pure-menu-link" to="/namelist" linkname="NameList" /></li>
          <li className="pure-menu-item"><NavLinks className="pure-menu-link" to="/productlist" linkname="ProductList" /></li>
        </ul>
      </div >
    )
  }
}
