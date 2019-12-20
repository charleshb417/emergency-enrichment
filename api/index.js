var express = require('express'),
  path = require('path'),
  app = express(),
  port = process.env.PORT || 3000
  bodyParser = require('body-parser');

global.appRoot = path.resolve(__dirname);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./rest/routes/reportRoutes');
routes(app);

console.log("Starting emergency reports API service...")
app.listen(port);
