import React from 'react';
import ModalDialog from './ModalDialog'
import '../less/modal.less';
import { Modal, Button } from 'react-bootstrap';

export default class ReadFile extends React.Component{
    constructor(){
        super();
        this.state = {
            show: false,
            title: 'Just title'
        }
    }
    handleTitle(newTitle){
        this.setState({title:newTitle})
    }
    render(){
        return (
            <div className="read-file">
                <h1>{this.state.title}</h1>
                <Button bsStyle="warning" onClick={() => this.setState({show:true})}>Read File</Button>
                <ModalDialog
                    show={this.state.show}
                    onClose={() => this.setState({show:false})}
                    onHandleTitle={this.handleTitle.bind(this)}
                />
            </div>
        );
    }
}