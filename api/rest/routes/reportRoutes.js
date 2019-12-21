'use strict';

module.exports = function(app) {
  var reports = require('../controllers/reportController');

  app.route('/api/reports')
    .get(reports.list_available_reports);

  app.route('/api/reports/:reportID')
    .get(reports.get_report);
};
