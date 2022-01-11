import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { logout } from '../../actions/session_actions';
import { clearErrorsReview, createReview, fetchReview, fetchReviews } from '../../actions/review_actions';
import {getBusiness} from '../../actions/business_actions'

const mSTP = (state, ownProps) => ({
    review:{
        body: '',
        rating:0
    },
    currentUser: state.entities.users[state.session.id],
    business: state.entities.businesses[ownProps.match.params.businessId],
    errors: state.errors.reviews
   
})

const mDTP = dispatch =>( {
    fetchBusiness: businessId => dispatch(getBusiness(businessId)),
    logout: () => dispatch(logout()),
    createReview: review => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrorsReview()),
    fetchReviews: () => dispatch(fetchReviews())


})

export default connect(mSTP,mDTP)(ReviewForm);