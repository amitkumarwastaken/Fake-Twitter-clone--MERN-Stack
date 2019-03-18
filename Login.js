import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, Alert } from 'reactstrap';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearErrors } from '../actions/errorActions';
import { login } from '../actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Login extends Component{

    state = {
        email: '',
        password: '',
        msg: null,
        href: ''
    }

    
static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
};


componentDidUpdate(prevProps){
    const { error } = this.props;

    if(error !== prevProps.error) {
        // Check for Register Error
        if(error.id == 'LOGIN_FAIL') {
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

    const{ email, password } = this.state;

    const user = {
        email,
        password
    }

    // Attempt to Login
    this.props.login(user);
  
    // Clear errors
    this.props.clearErrors();
    
    
}

    
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

                { this.props.isAuthenticated ? <h1><a href="/homepage">Go to Homepage >></a></h1> : ''}

                <Form className="form_login" onSubmit={ this.onSubmit }>
                    <h3 className="login_heading">Login to Fake Twitter</h3>
                    <FormGroup>
                        <Label for='email'> Email: </Label>
                        <Input 
                        type="email" 
                        placeholder="email id.." 
                        id='email'
                        name="email"
                        onChange={ this.onChange }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'> Password: </Label>
                        <Input 
                        type="password" 
                        placeholder="enter your password.."
                        id="password"
                        name="password"
                        onChange={ this.onChange }
                         />
                    </FormGroup>
                        <h6>
                            <span className="newto_twitter">New to Fake Twitter?</span>
                            <a href="/" className="signup_link"> Sign Up</a>
                        </h6>
                        <br />
                        <Button>Login</Button>
                </Form>
               
                
            </div>




        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
});


export default connect(mapStateToProps, { login, clearErrors })(Login);