import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: "Log in",
    navLink: <Link to="/signup">Sign up</Link>
})

const mDTP = dispatch => ({
    action: user => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    demoLogin: user => dispatch(login(user))
   
})

export default connect(mSTP,mDTP)(SessionForm)