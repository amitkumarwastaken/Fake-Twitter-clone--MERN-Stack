import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, Alert } from 'reactstrap';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';




class Signup extends Component{

    state = {
        name: '',
        email: '',
        password: '',
        msg: null
    };


static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
};


componentDidUpdate(prevProps){
    const { error } = this.props;

    if(error !== prevProps.error) {
        // Check for Register Error
        if(error.id == 'REGISTER_FAIL') {
            this.setState({ msg: error.msg.msg });
        } else {
            this.setState({ msg: null});
        }
    }

}



onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
};

onSubmit = e => {
    e.preventDefault();

    const{ name, email, password } = this.state;

    // Create User Object
    const newUser = {
        name, email, password
    };

    // Attempt to register
    this.props.register(newUser);

    this.props.clearErrors();
};






    
    render(){
        return(
            <div className="login_component">
                <Navbar color='dark'>
                    <Nav>
                        <NavItem>
                        <NavbarBrand className="homepage_twitter_login_signup_about">
                                    <img src={require("./twitter_icon.png")} className="icon_image"/>
                                    {' '}
                                    <span className="homepage_navbar">
                                        Fake Twitter
                                    </span>
                                </NavbarBrand>
                        </NavItem>
                    </Nav>
                </Navbar>

                { this.state.msg ? (
                <Alert color="danger">{ this.state.msg }</Alert>
                ) : null }

                { this.props.isAuthenticated ? 
                <h1><a href="/homepage">Go to Homepage >></a></h1> : ''}

                <Form className="form_login" onSubmit={this.onSubmit}>
                    <h3 className="login_heading">Sign Up to Fake Twitter</h3>
                    <FormGroup>
                        <Label for="name"> Your Fake Name: </Label>
                        <Input 
                        type="text" 
                        placeholder="fake names only.." 
                        name="name"
                        id="name"
                        onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label> Email: </Label>
                        <Input 
                        type="email" 
                        placeholder="email id.." 
                        name="email"
                        id="email"
                        onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label> Password: </Label>
                        <Input 
                        type="password" 
                        placeholder="enter your password.." 
                        name="password"
                        id="password"
                        onChange={this.onChange}
                        />
                    </FormGroup>
                    <p>Already an User? <a href="/login">Login</a></p>
                    <br />
                    <Button>Signup</Button>
                </Form>
               
                
            </div>




        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});


export default connect(mapStateToProps, { register, clearErrors })(Signup);