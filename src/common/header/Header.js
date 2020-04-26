import React, { Component } from 'react';
import Modal from 'react-modal';

import './Header.css';
import logo from '../../assets/logo.svg';

import { Button, Tabs, Tab, Typography, FormControl, InputLabel, Input } from '@material-ui/core';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const TabContainer = function(props) {
    return(
        <Typography component="div" style={{padding: 0, textAlign: 'center'}}>
            {props.children}
        </Typography>
    ); 
}

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
            <Modal contentLabel="Login" isOpen={this.state.modalIsOpen} ariaHideApp={false} onRequestClose={this.closeModalHandler}
                style={customStyles}>
                <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input id="username" type="text"></Input>
                    </FormControl><br /><br />
                    <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" />
                    </FormControl><br /><br />
                    <Button variant="contained" color="primary">LOGIN</Button>
                </TabContainer>
            </Modal>
        </div>);
    }
}

export default Header;