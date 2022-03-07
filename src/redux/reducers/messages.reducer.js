const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return action.payload;
        default:
            return state;
    }
};

  // messages will be on the redux state at:
  // state.messages
export default messagesReducer;