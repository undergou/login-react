import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/js/App.js';
import Login from './components/js/Login.js';
import Register from './components/js/Register.js';
import NotFound from './components/js/NotFound.js';
import ReadFile from './components/js/ReadFile.js';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div className="wrapper">
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/readfile" component={ReadFile} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);