import { connect } from "react-redux";
import { getBusiness, getBusinesses } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
import { withRouter } from "react-router-dom";
import BusinessShow from "./business_show";
import {logout} from '../../actions/session_actions'

const mSTP = (state, ownProps) => {
   
    return({
        reviews: Object.values(state.entities.reviews),
        business: state.entities.businesses[ownProps.match.params.businessId],
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
    })

}


const mDTP = dispatch => {
    return({
        fetchBusiness: businessId => dispatch(getBusiness(businessId)),
        fetchReviews: () => dispatch(fetchReviews()),  
        logout: () => dispatch(logout())
    })
};

export default connect(mSTP,mDTP)(BusinessShow);