import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, Badge, Row, Col, Form, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logout from './Logout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';



class Profile extends Component {


    static propTypes = {
        auth: PropTypes.object.isRequired
    }


    render(){

        const { isAuthenticated, user } = this.props.auth;

        return(
            <div>
                <Navbar color='dark'>
                    <Nav>
                        <NavItem>
                            <NavbarBrand href="/homepage">
                            <span className="homepage_navbar">
                                 HomePage
                            </span>
                            </NavbarBrand>
                                <NavbarBrand className="homepage_twitter">
                                    <img src={require('./twitter_icon.png')} className="icon_image" alt='icon'/>
                                    {' '}
                                    <span className="homepage_navbar">
                                        Fake Twitter
                                    </span>
                                </NavbarBrand>

                                <NavbarBrand href="/about" className="homepage_about">
                                <span className="homepage_navbar">
                                        About Page
                                </span>
                                </NavbarBrand>
                        </NavItem>
                    </Nav>
                </Navbar>

                {isAuthenticated ? <Logout />  : ''}
            
            <Row>
                <Col className="the_profile_page">
               
                <h1>Personal<Badge color="secondary">
                     Info
                </Badge></h1>
                        <h3>
                        <Badge color="warning" className="the_profile_pagee">Your Fake Name:</Badge> 
                        {user ? user.name : ''}
                        <br />
                        <Badge color="warning" className="the_profile_pagee">Your Fake Email:</Badge> 
                        {user ? user.email : ''}
                        <br />
                        <Badge color="warning" className="the_profile_pagee">Your Real Password:</Badge> Go figure.
                        </h3>
                        <p>yeah, that's it. Don't expect me to make something competing with twitter, I aint getting paid.</p>
                    </Col>
            </Row>
        </div>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, null)(Profile);