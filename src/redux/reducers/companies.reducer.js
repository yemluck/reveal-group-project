const companiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMPANIES':
            return action.payload;
        default:
            return state;
    }
};

  // messages will be on the redux state at:
  // state.messages
export default companiesReducer;