const scoreRulesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SCORE_RULES':
            return action.payload;
        default:
            return state;
    }
};

  // messages will be on the redux state at:
  // state.messages
export default scoreRulesReducer;