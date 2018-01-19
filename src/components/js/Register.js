import React from 'react';
import ResultScreen from './ResultScreen';
import { ButtonToolbar, Button, FormControl } from 'react-bootstrap';
import sendData from '../services/sendData.js';
import {Link} from 'react-router-dom';

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email:'',
            isRegisterSuccess: false,
            resultMessage:''
        }
    }
    handleRegisterSubmit(event){
        event.preventDefault();
        let data = {
            "userName": this.state.username,
            "password": this.state.password,
            "email": this.state.email
        };
        sendData(data, 'https://iamit.gq/api/account/register')
            .then( response => {
                if(response.status != 200){
                    response.json().then( data => {
                        this.clearPasswordInput();
                        this.setState({ resultMessage: data.errors});
                    })
                } else{
                    this.setState({isRegisterSuccess: true, resultMessage: 'Thank you for registration!'})
                }
            })

    }
    clearPasswordInput(){
        this.setState({ password:''})
    }
    render(){
           const registerScreen = <div className="content">
               <h2>Register</h2>
               <FormControl type="text"
                            name="username"
                            value={this.state.username}
                            onChange={(event) => this.setState({username: event.target.value})}
                            placeholder="Username"
                            autoComplete="off"
               />
               <br/><br/>
               <FormControl type="password"
                            name="password"
                            value={this.state.password}
                            onChange={(event) => this.setState({password: event.target.value})}
                            placeholder="Password"
                            autoComplete="off"
               />
               <br/><br/>
               <FormControl type="email"
                            name="email"
                            value={this.state.email}
                            onChange={(event) => this.setState({email: event.target.value})}
                            placeholder="Email"
                            autoComplete="off"
               />
               <p className="error-message">{this.state.resultMessage}</p>
               <ButtonToolbar>
                   <Button onClick={this.handleRegisterSubmit.bind(this)} bsStyle="primary">Register</Button>
               </ButtonToolbar>
               <p><Link to='/login' >Already registered? Sign in!</Link></p>
            </div>;
        return (
            <Choose>
                <When condition={ this.state.isRegisterSuccess }>
                    <ResultScreen message={this.state.resultMessage}/>
                </When>
                <Otherwise>
                    {registerScreen}
                </Otherwise>
            </Choose>
            // this.state.isRegisterSuccess?<ResultScreen message={this.state.resultMessage}/>:registerScreen
        );
    }
}