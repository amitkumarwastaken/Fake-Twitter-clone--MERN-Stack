import React, { Component } from 'react';
import { Form, FormGroup, Button, Label, Input, Container, Row, Col} from 'reactstrap';
import { Navbar, Nav, NavItem,  NavbarBrand, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tweetRegister } from '../actions/tweetActions';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';



class Homepage extends Component {

    state = {
        tweet: '',
        tweets: []
    }

    componentDidMount(){
        axios.get('/api/tweet')
            .then(res => {
                const tweets = res.data;
                this.setState({ tweets: res.data });
            });
    }


    static propTypes = {
        tweetRegister: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const{ tweet } = this.state;

        const user = { tweet }
         
        this.props.tweetRegister(user);
        

    };


    render(){
        return(
            <div>
                <Navbar color='dark'>
                    <Nav>
                        <NavItem>
                            <NavbarBrand href="/profile">
                                <span className="homepage_navbar">
                                    Profile Page
                                </span>
                            </NavbarBrand>
                            <NavbarBrand className="homepage_twitter">
                                <img src={require("./twitter_icon.png")} className="icon_image"/>
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
                <br />
                <br />
                <Container>
                    <Row>
                        <Col sm="8">
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label>Make a fake tweet =>>></Label>
                                    <Input
                                    type="textarea"
                                    placeholder="your secrets only.." 
                                    name="tweet"
                                    id="tweet"
                                    onChange={ this.onChange }
                                    />
                                </FormGroup>
                                <Button>Tweet it right now!!</Button>
                            </Form>

                                <br />
                                <br />
                                <br />

                            <ul className="tweets_list">
                                <h4>
                                    { this.state.tweets.map((tweet) => <p className="tweet_list">{ tweet.tweet } 
                                    <br /> <span className="tweet_date"> { tweet.tweet_date } </span> </p>) }
                                    </h4>
                            </ul>

                        </Col>
                    </Row>
                </Container>  
            </div>
        );
    }
}


const mapStateToProps = state => ({
    data: state.tweet.data
});


export default connect(mapStateToProps, { tweetRegister })(Homepage);