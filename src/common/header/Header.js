import React, { Component } from 'react';
import Modal from 'react-modal';

import './Header.css';
import logo from '../../assets/logo.svg';

import { FormHelperText, Button, Tabs, Tab, Typography, FormControl, InputLabel, Input } from '@material-ui/core';

import propTypes from 'prop-types';

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

TabContainer.propTypes = {
    children: propTypes.node.isRequired
}

class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            passwrodRequired: "dispNone",
            password: "",
            firstname: "",
            firstnameRequired: "dispNone",
            lastname: "",
            lastnameRequired: "dispNone",
            email: "",
            emailRequired: "dispNone",
            contactno: "",
            contactnoRequired: "dispNone"
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true});
    }

    closeModalHandler = () => {
        this.setState({
            modalIsOpen: false,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            passwrodRequired: "dispNone",
            password: "",
            firstname: "",
            firstnameRequired: "dispNone",
            lastname: "",
            lastnameRequired: "dispNone",
            email: "",
            emailRequired: "dispNone",
            contactno: "",
            contactnoRequired: "dispNone"
        });
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});
        this.state.password === "" ? this.setState({passwrodRequired: "dispBlock"}) : this.setState({passwrodRequired: "dispNone"});
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({username: e.target.value});
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({password: e.target.value});
    }

    inputFirsatNameChangeHandler = (e) => {
        this.setState({firstname: e.target.value});
    }

    inputLastNameChangeHandler = (e) => {
        this.setState({lastname: e.target.value});
    }

    inputEmailChangeHandler = (e) => {
        this.setState({email: e.target.value});
    }

    inputContactNoChangeHandler = (e) => {
        this.setState({contactno: e.target.value});
    }

    resgisterClickHandler = () => {
        this.state.firstname === "" ? this.setState({firstnameRequired: "dispBlock"}) : this.setState({firstnameRequired: "dispNone"});
        this.state.lastname === "" ? this.setState({lastnameRequired: "dispBlock"}) : this.setState({lastnameRequired: "dispNone"});
        this.state.email === "" ? this.setState({emailRequired: "dispBlock"}) : this.setState({emailRequired: "dispNone"});
        this.state.password === "" ? this.setState({passwrodRequired: "dispBlock"}) : this.setState({passwrodRequired: "dispNone"});
        this.state.contactno === "" ? this.setState({contactnoRequired: "dispBlock"}) : this.setState({contactnoRequired: "dispNone"});
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
                {this.state.value === 0 && 
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}></Input>
                            <FormHelperText className={this.state.usernameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl><br /><br />
                        <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler}/>
                                <FormHelperText className={this.state.passwrodRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                        </FormControl><br /><br />
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>
                }
                {this.state.value === 1 &&
                    <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor="firstname">First Name</InputLabel>
                        <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirsatNameChangeHandler}/>
                        <FormHelperText className={this.state.firstnameRequired}>
                            <span className="red">required</span>
                        </FormHelperText>
                    </FormControl><br /><br />
                    <FormControl required>
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastNameChangeHandler}/>
                            <FormHelperText className={this.state.lastnameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                    </FormControl><br /><br />
                    <FormControl required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="text" email={this.state.email} onChange={this.inputEmailChangeHandler}/>
                            <FormHelperText className={this.state.emailRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                    </FormControl><br /><br />
                    <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler}/>
                                <FormHelperText className={this.state.passwrodRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                    </FormControl><br /><br />
                    <FormControl required>
                            <InputLabel htmlFor="contactno">Contact No.</InputLabel>
                            <Input id="contactno" type="contactno" contactno={this.state.contactno} onChange={this.inputContactNoChangeHandler}/>
                            <FormHelperText className={this.state.contactnoRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                    </FormControl><br /><br />
                    <Button variant="contained" color="primary" onClick={this.resgisterClickHandler}>REGISTER</Button>
                </TabContainer>
                }
            </Modal>
        </div>);
    }
}

export default Header;