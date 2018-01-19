import React from 'react';
import { Image } from 'react-bootstrap';

export default class Logo extends React.Component {
    render(){
        return (
            <div className="nav-element">
                <Image className="logo-img" src="https://iamit.gq/images/svg/logo.svg" alt="logo"/>
                <div className="logo-text">Online Education Platform</div>
            </div>
        );
    }
}