import React from 'react';
import { Link, IndexLink } from 'react-router';


export default class NavLinks extends React.Component {
    constructor() {
        super();

    }

    render() {
        let { to, linkname, className } = this.props;
        if (to === '/') {
            return (
                <IndexLink className={className} to={to} activeClassName="active">{linkname}</IndexLink>
            )
        } else {
            return (
                <Link className={className} to={to} activeClassName="active">{linkname}</Link>
            )
        }

    }

}