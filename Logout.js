import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Alert, Button } from 'reactstrap';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    render(){
        return(
            <Fragment>
                <Alert color="dark">
                    <Button color="primary" onClick={this.props.logout} href="/login">
                        Logout
                    </Button>
                </Alert>
            </Fragment>
        );
    }

}



export default connect(null, { logout })(Logout);