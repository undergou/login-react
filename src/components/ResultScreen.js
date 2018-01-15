import React from 'react';

export default class ResultScreen extends React.Component {
    render(){
        return (
            <div className="content">
                <h2>Success!</h2>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
