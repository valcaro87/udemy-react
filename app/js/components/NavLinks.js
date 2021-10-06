import React from 'react';

import { Link, IndexLink } from 'react-router';


export default class NavLinks extends React.Component {
    constructor() {
        super();

    }

    render() {
        let { to, linkname } = this.props;
        if (to === '/') {
            return (
                <IndexLink to={to} activeClassName="active">{linkname}</IndexLink>
            )
        } else {
            return (
                <Link to={to} activeClassName="active">{linkname}</Link>
            )
        }

    }

}