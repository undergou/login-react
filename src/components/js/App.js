import React from 'react';
import {Link} from 'react-router-dom';
import '../less/app.less';
import '../less/content.less';
import { ButtonToolbar, Button } from 'react-bootstrap';


export default class App extends React.Component{
    render(){

        return (
          <div className="content">
              <h2>Welcome to our app!</h2>
              <p>If you are not registered, register now!</p>
              <Link to="/register">
                  <ButtonToolbar>
                      <Button bsStyle="primary">Register</Button>
                  </ButtonToolbar>
              </Link>
              <p>Already registered? Sign in!</p>
              <Link to="/login">
                  <ButtonToolbar>
                      <Button bsStyle="primary">Sign in</Button>
                  </ButtonToolbar>
              </Link>
          </div>
        );
    }
}
