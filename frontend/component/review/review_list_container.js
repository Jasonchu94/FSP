import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews, editReview, deleteReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import { getBusiness } from '../../actions/business_actions';
import ReviewList from './review_list'
const mSTP = (state, ownProps) => {
    
    return({

        reviews: state.entities.reviews,
        businesses: state.entities.businesses,
        currentUser: state.entities.users[state.session.id],
        // business: state.entities.businesses[ownProps.match.params.businessId]
    })
}

const mDTP = dispatch => ({
    fetchBusiness: businessId => dispatch(getBusiness(businessId)),
    fetchReviews: () => dispatch(fetchReviews()),
    updateReview: review => dispatch(editReview(review)),
    removeReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(ReviewList)