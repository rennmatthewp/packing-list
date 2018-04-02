const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')[configuration];

app.use(express.static('public'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

app.locals.title = 'Mars Packing List';

app.listen(app.get('port'), () => {
  //eslint-disable-next-line
  console.log(`${app.locals.title} is running on port ${app.get('port')}`);
});

module.exports = app;
