'use strict';

module.exports = function(app) {
  var reports = require('../controllers/reportController');

  app.route('/reports')
    .get(reports.list_available_reports);

  app.route('/reports/:reportID')
    .get(reports.get_report);
};
