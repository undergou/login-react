import React from 'react';
import {Link} from 'react-router-dom';
require('./navmenu.less')

export default class NavMenu extends React.Component{
    render(){
        return (
            <div className="nav-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
        );
    }
}