import React from 'react';
import ResultScreen from './ResultScreen';
import { ButtonToolbar, Button, FormControl } from 'react-bootstrap';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
            isLoginSuccess: false,
            resultMessage:''
        }
    }
    handleLoginSubmit(event){
        event.preventDefault();
        let data = {
            username: this.state.username,
            password: this.state.password
        };
        let dataJson = JSON.stringify(data);
        fetch('http://www.mocky.io/v2/5a588ba82d00002e15d2e562',{
            headers: {
                "Content-type": "application/json"
            },
            method: 'post',
            body: dataJson
        })
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                if(data.result === "ok"){
                    this.setState({isLoginSuccess: true, resultMessage: data.message})
                } else if(data.result === "error"){
                    this.clearPasswordInput();
                    this.setState({ resultMessage: data.message});
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
                            name="username"
                            value={this.state.username}
                            placeholder="Username"
                            onChange={(event) => this.setState({username: event.target.value})}
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