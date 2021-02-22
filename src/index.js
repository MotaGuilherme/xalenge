const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const db = require('../src/database/index');
const dbRoute = require('./routes/db')
//const server = require('./app/app')




const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authcontroller')(app)

app.use('/routes', dbRoute)

app.listen(3000);
app.listen('3300')
app.listen(3333)

 
