'use strict';
var fs = require('fs'),
  request = require('request');

const API_KEY = process.env.DARK_SKY_KEY;
const reportsDirectory = `${global.appRoot}/assets/data`;
const weatherRoot = `https://api.darksky.net/forecast/${API_KEY}`;

exports.list_available_reports = function(req, res) {
  fs.readdir(reportsDirectory, function(err, items) {
    let results;
    if (err){
      results = { 'data': [], 'error': 'Reports database is misconfigured.'};
      res.status(500).json(results);
    } else {
      results = { 'data' : items.map( item => item.replace('.json', '') ), 'error': false };
      res.json(results);
    }
  });
};

exports.get_report = function(req, res) {
  let reportID = req.params.reportID;
  fs.readFile(`${reportsDirectory}/${reportID}.json`, (err, data) => {
    let results;
    if (err){
      results = { 'data': [], 'error': 'A report by that name does not exist.'};
      res.json(results);
    } else {
      let reportJson = JSON.parse(data);
      results = { 'data' : reportJson, 'error': false };
      
      let lat = reportJson.address.latitude;
      let long = reportJson.address.longitude;
      let timestamp = reportJson.apparatus[0].unit_status.dispatched.timestamp;
      let unixTimestamp = (new Date(timestamp).getTime()) / 1000;

      request(`${weatherRoot}/${lat},${long},${unixTimestamp}`, function (error, response, body) {
        let weatherResults;

        if (!error && response.statusCode == 200) {
          weatherResults = JSON.parse(response.body);
        } else {
          weatherResults = { 'error': "There was an error getting weather information." }
        }

        results['weather'] = weatherResults;
        res.json(results);
      });
    }
  });
}
