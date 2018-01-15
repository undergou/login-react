import React from 'react';
import {Link} from 'react-router-dom';
require('./app.less');
require('./content.less');


export default class App extends React.Component{
    render(){
        return (
          <div className="content">
              <h2>Welcome to our app!</h2>
              <p>If you are not registered, register now!</p>
              <Link to="/register"><button>Register</button></Link>
              <p>Already registered? Sign in!</p>
              <Link to="/login"><button>Sign in</button></Link>
          </div>
        );
    }
}
