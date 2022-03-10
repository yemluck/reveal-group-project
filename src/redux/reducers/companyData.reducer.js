const companyDataReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMPANY_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default companyDataReducer;