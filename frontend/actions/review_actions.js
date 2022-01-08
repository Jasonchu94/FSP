import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = ' DELETE_REVIEW';
export const RECEIEVE_ERRORS_REVIEW = 'RECEIEVE_ERRORS_REVIEW';
export const CLEAR_ERRORS_REVIEW = 'CLEAR_ERRORS_REVIEW';

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: DELETE_REVIEW,
    reviewId
})

const receiveErrorsReview = errors => ({
    type: RECEIEVE_ERRORS_REVIEW,
    errors
})

export const clearErrorsReview = () => ({
    type: CLEAR_ERRORS_REVIEW
})

export const fetchReviews = () => dispatch => (
    ReviewAPIUtil.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = reviewId => dispatch => (
    ReviewAPIUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => (
    ReviewAPIUtil.createReview(review)
        .then(
            review => dispatch(receiveReview(review)),
            errors => dispatch(receiveErrorsReview(errors.responseJSON))
            )
)

export const deleteReview = reviewId => dispatch => (
    ReviewAPIUtil.deleteReview(reviewId)
        .then(
            reviewId => dispatch(removeReview(reviewId)),
            errors => dispatch(receiveErrorsReview(errors.responseJSON))
        )
)

export const editReview = review => dispatch => (
    ReviewAPIUtil.editReview(review)
        .then(
            review => dispatch(receiveReview(review)),
            errors => dispatch(receiveErrorsReview(errors.responseJSON))
        )
)