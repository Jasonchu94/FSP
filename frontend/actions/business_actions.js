import * as BusinessApiUtil from '../util/busienss_api_util';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES'

const receiveBusiness = business => ({
    type: RECEIVE_BUSINESS,
    business
})

const receiveAllBusinesses = businesses => ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses
})

export const getBusiness = businessId => dispatch => (
    BusinessApiUtil.fetchBusiness(businessId)
        .then(business => dispatch(receiveBusiness(business)))
)

export const getBusinesses = () => dispatch => (
    BusinessApiUtil.fetchAllBusinesses()
        .then(businesses => dispatch(receiveAllBusinesses(businesses)))
)