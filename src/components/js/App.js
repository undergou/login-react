import React from 'react';
import {Link} from 'react-router-dom';
import '../less/app.less';
import '../less/content.less';
import { ButtonToolbar, Button } from 'react-bootstrap';
import Menu from './Menu.js';
import Tagline from './Tagline.js';
import Courses from './Courses.js';

export default class App extends React.Component{
    render(){
        return (
          <div className="wrap-content">
              <Menu />
              <Tagline />
              <Link to="/login">
                  <ButtonToolbar>
                      <Button bsStyle="warning" bsSize="large">Start training</Button>
                  </ButtonToolbar>
              </Link>
              <Courses />
          </div>
        );
    }
}
