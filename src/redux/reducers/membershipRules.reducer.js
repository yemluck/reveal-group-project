const membershipRulesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MEMBERSHIP_RULES':
            return action.payload;
        default:
            return state;
    }
};

  // membershipRules will be on the redux state at:
  // state.membershipRules
export default membershipRulesReducer;