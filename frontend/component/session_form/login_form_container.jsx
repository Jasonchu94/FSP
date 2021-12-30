import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: "login",
    navLink: <Link to="/signup">Don't have an account yet?</Link>
})

const mDTP = dispatch => ({
    action: user => dispatch(login(user))
})

export default connect(mSTP,mDTP)(SessionForm)