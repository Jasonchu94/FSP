import { connect } from "react-redux";

import BusinessIndex from "./business_index";
import {logout} from '../../actions/session_actions';
import { getBusinesses } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
const mSTP = state => (
    
    {    
    businesses: Object.values(state.entities.businesses),
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews)
    }
)

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchBusinesses: () => dispatch(getBusinesses()),
    fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mSTP,mDTP)(BusinessIndex)