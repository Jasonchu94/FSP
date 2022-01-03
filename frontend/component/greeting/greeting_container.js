import {connect} from "react-redux";
import {logout} from "../../actions/session_actions";
import Greeting from "./greeting"

const mSTP = (props) => ({
    // currentUser: users[session.id],{session, entities: {users}}
    currentUser: props.entities.users[props.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Greeting)