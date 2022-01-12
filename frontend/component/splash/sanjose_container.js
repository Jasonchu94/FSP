import { connect } from "react-redux";
import React from 'react';
import SanJose from './sanjose'
import { getBusinesses } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";

const mSTP = state => ({
    businesses: Object.values(state.entities.businesses),
    reviews: Object.values(state.entities.reviews)
})

const mDTP = dispatch => ({
    fetchBusinesses: () => dispatch(getBusinesses()),
    fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mSTP,mDTP)(SanJose);