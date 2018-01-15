import React from 'react';
import ResultScreen from './ResultScreen';

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
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        };
        let dataJson = JSON.stringify(data);
        fetch('http://www.mocky.io/v2/5a58923b2d00008119d2e575',{
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
                    this.setState({isRegisterSuccess: true, resultMessage: data.message})
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
           const registerScreen = <div className="content">
               <h2>Register</h2>
                <label>
                    <input type="text"
                           name="username"
                           value={this.state.username}
                           onChange={(event) => this.setState({username: event.target.value})}
                           placeholder="Username"
                           autoComplete="off"
                    />
                </label>
                <br/><br/>
                <label>
                    <input type="password"
                           name="password"
                           value={this.state.password}
                           onChange={(event) => this.setState({password: event.target.value})}
                           placeholder="Password"
                           autoComplete="off"
                    />
                </label>
                <br/><br/>
                <label>
                    <input type="email"
                           name="email"
                           value={this.state.email}
                           onChange={(event) => this.setState({email: event.target.value})}
                           placeholder="Email"
                           autoComplete="off"
                    />
                </label>
               <p className="error-message">{this.state.resultMessage}</p>
                <button onClick={this.handleRegisterSubmit.bind(this)}>Register</button>
            </div>;
        return (
            this.state.isRegisterSuccess?<ResultScreen message={this.state.resultMessage}/>:registerScreen
        );
    }
}