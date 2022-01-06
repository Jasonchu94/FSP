import { connect } from "react-redux";

import BusinessIndex from "./business_index";
import {logout} from '../../actions/session_actions';
import { getBusinesses } from "../../actions/business_actions";
const mSTP = state => (
    
    {    
    businesses: Object.values(state.entities.businesses),
    currentUser: state.entities.users[state.session.id]
    }
)

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchBusinesses: () => dispatch(getBusinesses())
})

export default connect(mSTP,mDTP)(BusinessIndex)