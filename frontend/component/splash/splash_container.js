import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentUser } from '../../actions/session_actions';
import Splash from './splash'
import {getBusiness, getBusinesses} from '../../actions/business_actions'
 
const mSTP = ({session, entities:{users}}, state) => ({
    formType: "Splash",
    currentUser: users[session.id],
    // businesses: Object.values(state.entities.businesses)
})  

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser)),
    fetchBusinesses: () => dispatch(getBusinesses())
})

export default connect(mSTP,mDTP)(Splash)