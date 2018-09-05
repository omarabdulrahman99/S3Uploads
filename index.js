const express = require('express');
const bodyParser = require('body-parser');
const mongoose - require('mongoose');
const keys = require('./config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();
app.use(bodyParser.json());



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

	console.log('Listening on port', PORT);

})
