import {
    RECEIEVE_ERRORS_REVIEW, CLEAR_ERRORS_REVIEW
} from '../actions/review_actions'

const reviewErrorsReducer = (oldState=[], action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIEVE_ERRORS_REVIEW:
            return action.errors
        default:
            return oldState;
    }
};

export default reviewErrorsReducer;