const express = require('express');
const bodyParser = require('body-parser');
const mongoose - require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');



mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();


app.use(bodyParser.json());
app.use(cookieSession({

	maxAge:30 * 24 * 60 * 60 * 1000,
	keys:[keys.cookieKey]


   })
)

app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

	console.log('Listening on port', PORT);

})
