const activeCompanyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_COMPANY':
            return action.payload;
        default:
            return state;
    }
};

  // messages will be on the redux state at:
  // state.messages
export default activeCompanyReducer;
