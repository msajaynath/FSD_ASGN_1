import React, { Component } from 'react';
import './Login.css';
import Modal from 'react-modal';

import {
    Button,
    FormGroup,
    FormControl,
    ControlLabel, Checkbox
} from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false,
            modalIsOpen: false,
            valid: false,
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);

    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    validate() {
        this.openModal();
    }

    openModal() {
        if (this.state.username === 'test' && this.state.password === 'test') {
            this.state.valid = true;
            this.state.message = "Valid login!!!";

        }
        else {
            this.state.valid = false;
            this.state.message = "Invalid credentials!!!!";
        }
        this.setState({ modalIsOpen: true });

    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        if (!this.state.valid) {
            this.subtitle.style.color = '#f00';
            this.subtitle.innerText = "Error";
        }
        else {
            this.subtitle.style.color = '#0d0';
            this.subtitle.innerText = "Success";
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div className="Login">
                <form >
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"
                            type="password" />
                    </FormGroup>
                    <Checkbox
                        value={this.state.remember}
                        onChange={this.handleChange}
                    >Remember password</Checkbox>
                    <Button bsStyle="primary"
                        block
                        bsSize="large"
                        onClick={this.validate}
                        type="button">
                        Login
              </Button>


                </form>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}

                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Login"
                >

                    <h3 ref={subtitle => this.subtitle = subtitle}>Invalid</h3>
                    <div>{this.state.message}</div>
                    <button onClick={this.closeModal}>close</button>

                </Modal>
            </div>
        );
    }
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default Login;