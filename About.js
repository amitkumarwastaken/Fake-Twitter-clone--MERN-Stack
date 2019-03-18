import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


class About extends Component {
    render(){
        return(
            <div>
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
                <Jumbotron>
                    <Container>
                        <h1 className="about_heading">About</h1>
                        <h4 className="about_para">
                        Let me tell you something about the greatest invention of the
                        21st century: fake twitter. All jokes aside I
                        <a href="https://github.com/amitkumarwastaken" 
                        className="about_link"> @amitkumarwastaken </a>
                        on github
                        made this to practice my skills as a full-stack web developer using MERN Stack.
                        Here is the the link to the github repo: 
                        <a href="#" className="about_link"> GITHUB</a> <br />
                        Feel free to use the code.
                        </h4>
                    </Container>
                </Jumbotron>  
            </div>
        );
    }
}


export default About;