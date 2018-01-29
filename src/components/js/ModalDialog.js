import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ModalDialog extends React.Component{
    constructor(){
        super();
        this.state = {
            isEmpty: false
        }
    }
    handleReadFile(){
        const reader = new FileReader();
        const file = this.refs.inputFile.files[0];
        if(file !== undefined){
            reader.onload = () => {
                const text = reader.result;
                this.props.onHandleTitle(text);
                this.setState({ isEmpty: false });
                this.props.onClose();
            }
            reader.readAsText(file);
        }else{
            this.setState({ isEmpty: true })
        }
    }
    render(){
        return (
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>Read file</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="file" ref="inputFile"/>
                        <p className="error-message" style={{display: (this.state.isEmpty?'block':'none')}}>Please, choose a file</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onClose}>Close</Button>
                        <Button onClick={this.handleReadFile.bind(this)} bsStyle="success">Done</Button>
                    </Modal.Footer>
                </Modal>
        );
    }
}