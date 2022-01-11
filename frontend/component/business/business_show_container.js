import { connect } from "react-redux";
import { getBusiness, getBusinesses } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";

import BusinessShow from "./business_show";

const mSTP = (state, ownProps) => {
    
    return({

        business: state.entities.businesses[ownProps.match.params.businessId],
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
    })

}


const mDTP = dispatch => {
    return({
        fetchBusiness: businessId => dispatch(getBusiness(businessId)),
        fetchReviews: () => dispatch(fetchReviews()),
    })
};

export default connect(mSTP,mDTP)(BusinessShow);