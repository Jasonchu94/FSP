import React from 'react';
import { connect } from 'react-redux';

import { getBusinesses } from '../../actions/business_actions';
import { fetchReviews } from '../../actions/review_actions';
import SearchResult from './search_result';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    businesses: Object.values(state.entities.businesses),
    reviews: Object.values(state.entities.reviews)
})

const mDTP = dispatch => ({
    fetchBusinesses: () => dispatch(getBusinesses()),
    fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mSTP, mDTP)(SearchResult);