const selectedMembershipRulesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_MEMBERSHIP_RULES':
            return action.payload;
        default:
            return state;
    }
};

  // selectedMembershipRules will be on the redux state at:
  // state.selectedMembershipRules
export default selectedMembershipRulesReducer;