import React from 'react';
import NavMenu from './Navmenu.js';
import Logo from './Logo.js';
import '../less/navmenu.less';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Logo />
                <NavMenu />
            </div>
        );
    }
}