import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


export default class NavMenu extends React.Component{
    render(){
        return (
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Home</Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link to='/login'>Login</Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link to='/register'>Register</Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link to='/readfile'>Read File</Link>
                    </Navbar.Brand>
                </Navbar.Header>
        );
    }
}