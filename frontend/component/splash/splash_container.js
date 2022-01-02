import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentUser } from '../../actions/session_actions';
import Splash from './splash'

const mSTP = ({session, entities:{users}}) => ({
    formType: "Splash",
    currentUser: users[session.id]
})  

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser))
})

export default connect(mSTP,mDTP)(Splash)