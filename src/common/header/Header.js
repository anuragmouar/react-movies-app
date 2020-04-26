import React, { Component } from 'react';
import Modal from 'react-modal';

import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './Header.css';
import logo from '../../assets/logo.svg';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true});
    }

    closeModalHandler = () => {
        this.setState({
            modalIsOpen: false,
            value: 0
        });
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
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
                <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
            </Modal>
        </div>);
    }
}

export default Header;