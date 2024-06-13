const express = require('express');

const app = express();

const{APP_PORT, DB_URL } =require('./config');
const routes = require('./routes');
const {default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');

// const router = express.Router();
// app.use(router);

  

mongoose.connect(DB_URL).then(() => console.log('Connected!'));
app.use(express.static(__dirname + "/public"));
app.use( "/uploads",express.static( "uploads"));


app.use(bodyParser.urlencoded({
    extended: true, 
}))


app.use(bodyParser.json())


app.use('/api', routes);

app.listen(APP_PORT, ()=> {
    console.log(`app run on port ${APP_PORT}`);
});