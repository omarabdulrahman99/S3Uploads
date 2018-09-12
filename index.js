const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('./models/User');
require('./models/Blog');
require('./services/passport');
require('./services/cache');



mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();


app.use(bodyParser.json());
app.use(cookieSession({

	maxAge:30 * 24 * 60 * 60 * 1000,
	keys:[keys.cookieKey]


   })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('/routes/blogRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

	console.log('Listening on port', PORT);

})
