var express = require('express'),
  path = require('path'),
  app = express(),
  port = process.env.PORT || 3000
  bodyParser = require('body-parser'),
  fs = require('fs'),
  https = require('https');



global.appRoot = path.resolve(__dirname);

const options = {
  key: fs.readFileSync(`${global.appRoot}/../ssl/key.pem`),
  cert: fs.readFileSync(`${global.appRoot}/../ssl/cert.pem`)
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./rest/routes/reportRoutes');
routes(app);

console.log("Starting emergency reports API service...")
app.listen(port);

https.createServer(options, app).listen(3001);
