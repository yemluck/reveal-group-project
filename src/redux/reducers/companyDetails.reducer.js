const companyDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_COMPANY_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default companyDetailsReducer