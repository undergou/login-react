import React from 'react';
import ResultScreen from './ResultScreen';
import { ButtonToolbar, Button, FormControl, Checkbox } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import sendData from '../services/sendData.js';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            userName:'',
            password:'',
            persistent:false,
            isLoginSuccess: false,
            resultMessage:''
        }
    }
    handleLoginSubmit(event){
        event.preventDefault();
        let data = {
            "userName": this.state.userName,
            "password": this.state.password,
            "persistent": this.state.persistent
        };
        sendData(data, 'https://iamit.gq/api/auth/login')
            .then( response => {
                if(response.status != 200){
                    response.json().then( data => {
                        this.clearPasswordInput();
                        this.setState({ resultMessage: data.errors});
                    } )
                } else{
                    this.setState({isLoginSuccess: true, resultMessage: 'Hello, user!'})
                }
            })
    }
    clearPasswordInput(){
        this.setState({ password:''})
    }
    render(){
            const loginScreen = <div className="content">
                <h2>Login</h2>
                    <form>
                        <FormControl
                            type="text"
                            name="userName"
                            value={this.state.userName}
                            placeholder="Username"
                            onChange={(event) => this.setState({userName: event.target.value})}
                            autoComplete="off"
                        />
                        <br/><br/>
                        <FormControl
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={(event) => this.setState({password: event.target.value})}
                            placeholder="Password"
                            autoComplete="off"
                        />
                        <Checkbox
                            type="checkbox"
                            name="persistent"
                            onChange={(event) => this.setState({persistent: !this.state.persistent})}
                        >
                            Remember me
                        </Checkbox>
                        <p><Link to='/register'>Not registered? Register now!</Link></p>
                        <p className="error-message">{this.state.resultMessage}</p>
                        <ButtonToolbar>
                            <Button onClick={this.handleLoginSubmit.bind(this)} bsStyle="primary">Sign in</Button>
                        </ButtonToolbar>
                    </form>
                </div>;
        return (
            <Choose>
                <When condition={ this.state.isLoginSuccess }>
                    <ResultScreen message={this.state.resultMessage}/>
                </When>
                <Otherwise>
                    {loginScreen}
                </Otherwise>
            </Choose>
                // this.state.isLoginSuccess?<ResultScreen message={this.state.resultMessage}/>:loginScreen
            );

    }
}