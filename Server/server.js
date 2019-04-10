let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let DBConfig = require('../config/config');
let itemRoute = require('../routes/api/itemroute');

//Create the express app
const app = express();

//Create BodyParser Middleware so that we can read the request body
app.use(bodyParser.json());

//Create database config
const db = DBConfig.mongoURI;

//Connect To MongoDB
mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log('MongoDB Connected!'))
        .catch((error) => console.log(`Something Wrong! ${error}`));

//Use this route if the URI goes to api/itemroute/...
app.use('/api/itemroute', itemRoute);

//Set the port that the server will listen to
const port = process.env.PORT || 5000;
//This will let the port be the hosting server environment port or port 5000 on local host

//Listen to the port and set the callback function
app.listen(port, () => console.log(`Server listening to port ${port}`));