const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const messagesRouter = require('./routes/messages.router');
const surveyRouter = require('./routes/survey.router');
const companiesRouter = require('./routes/companies.router');
const ruleRouter = require('./routes/rule.router');
const companyDetailsRouter = require('./routes/companyDetails.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/', surveyRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/companyDetails', companyDetailsRouter);
app.use('/api/admin/rules', ruleRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
