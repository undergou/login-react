import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import NotFound from './components/NotFound.js';
import NavMenu from './components/NavMenu.js';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div className="wrapper">
            <NavMenu />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);