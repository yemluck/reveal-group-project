import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import messages from './messages.reducer';
import survey from './survey.reducer';
import companies from './companies.reducer';
import activeCompany from './activeCompany.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  messages, // will have user's email, name, and message
  survey, // will have preference rating for users
  companies, // contains a list of the actively displayed companies
  activeCompany, // contains details about the currently selected company
});

export default rootReducer;
