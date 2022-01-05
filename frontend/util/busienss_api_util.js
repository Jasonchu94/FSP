export const fetchAllBusinesses = () => (
    $.ajax({
        method: 'GET',
        url: '/api/businesses'
    })
)

export const fetchBusiness = businessId => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}`
    })
)

