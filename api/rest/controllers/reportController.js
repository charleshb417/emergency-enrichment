'use strict';
var fs = require('fs');

const reportsDirectory = `${global.appRoot}/assets/data`;

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
      res.json(results);
    }
  });
}
