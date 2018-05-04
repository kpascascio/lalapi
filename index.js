require('dotenv').config();
const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const sequelizedb = require('./db');

sequelizedb.sync(/*{force:true}*/)
app.use(bodyParser.json())

app.use('/api/kids', require('./controllers/Kids')); 
app.use('/api/behavior', require('./controllers/Behaviors'))

app.listen(3000, () => console.log('App is listening on 3000'))

