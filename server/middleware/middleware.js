'use strict'

module.exports = function(app, express){

  var crimeRouter = express.Router();

  app.use('/api/crimes', crimeRouter);

  require('../crime/crimeRoutes.js')(crimeRouter);

}
