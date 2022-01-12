import React from 'react';
import { connect } from 'react-redux';
import EditReviewForm from './edit_review_form'
import { getBusiness } from '../../actions/business_actions';
import { logout } from '../../actions/session_actions';
import { editReview, fetchReview, clearErrorsReview, fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    business: state.entities.businesses[ownProps.match.params.businessId],
    errors: state.errors.reviews,
    review: state.entities.reviews[ownProps.match.params.reviewId]

})

const mDTP = dispatch => ({

    logout: () => dispatch(logout()),
    editReview: review => dispatch(editReview(review)),
    clearErrors: () => dispatch(clearErrorsReview()),
    fetchBusiness: businessId => dispatch(getBusiness(businessId)),
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mSTP,mDTP)(EditReviewForm);