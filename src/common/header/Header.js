import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';

import './Header.css';
import logo from '../../assets/logo.svg';

class Header extends Component {

    constructor() {
        super();
        this.state = {modalIsOpen: false};
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true});
    }

    closeModalHandler = () => {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
        <div>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <div className="login-button">
                    <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                </div>
            </header>
            <Modal contentLabel="Login" isOpen={this.state.modalIsOpen} ariaHideApp={false} onRequestClose={this.closeModalHandler}>
            </Modal>
        </div>);
    }
}

export default Header;