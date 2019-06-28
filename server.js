const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const dbRoute = 'mongodb://localhost:27017/multisenservice';

const csvWriter = createCsvWriter({
  path: 'file.csv',
  header: ['SENSOR1', 'SENSOR2', 'SENSOR3', 'SENSOR4', 'SENSOR5']
});

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//mongoose.connect(dbRoute, { useNewUrlParser: true });

//let db = mongoose.connection;

//db.once('open', () => console.log('connected to the database'));
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/input', (req, res) => {
	return res.send('pong');
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/input', (req, res) => {
  const sensor = [[
    req.body.sensor1,
    req.body.sensor2,
    req.body.sensor3,
    req.body.sensor4,
    req.body.sensor5
  ]];
  csvWriter.writeRecords(sensor)
    .then(() => {
      console.log(sensor);
      console.log('data telah dikirimkan...');
    });
  res.sendStatus(200);
  //console.log(req.body);
});

app.get('/getlastdata', (req, res) => {
	console.log(req.params.body);

});
app.listen(port, () => {
	console.log("Running on Port " + port);
});
