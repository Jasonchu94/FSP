import {RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES} from '../actions/business_actions'

const businessReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            let nextState = Object.assign({}, oldState, {[action.business.id]: action.business})
            return nextState;        
        default:
            return oldState;
    }
}
export default businessReducer;