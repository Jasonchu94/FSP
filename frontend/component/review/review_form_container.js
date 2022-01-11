import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => ({
    review:{
        body:'',
        rating: 0
    },
    currentUser: state.entities.users[state.session.id],
   
})

const mDTP = dispatch =>( {


})

export default connect(mSTP,mDTP)(ReviewForm)