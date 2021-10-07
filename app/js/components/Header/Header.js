import React from 'react';
import NavLinks from './NavLinks';

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
            <div>
                <header>
                    <h1 style={style}>Welcome to my site</h1>
                    <p>im inside the header</p>

                    <NavLinks to="/" linkname="Home" />
                    <span> | </span>
                    <NavLinks to="/timer" linkname="Timer" />
                    <span> | </span>
                    <NavLinks to="/namelist" linkname="NameList" />
                </header>
            </div>
        )
    }
}