const companyDataReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMPANY_DATA':
            return action.payload;
        case 'CLEAR_INFO':
            return state;
        default:
            return state;
    }
}

export default companyDataReducer;