const scoreRulesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SCORE_RULES':
            return action.payload;
        default:
            return state;
    }
};

  // scoreRules will be on the redux state at:
  // state.scoreRules
export default scoreRulesReducer;