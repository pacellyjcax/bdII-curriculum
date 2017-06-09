/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

module.exports = function(app) {

  // Insert routes below
  app.use('/api/tipos_experiencias', require('./api/tipo_experiencia'));
  app.use('/api/experiencias', require('./api/experiencia'));
  app.use('/api/curriculos', require('./api/curriculo'));
  app.use('/api/pessoas', require('./api/pessoa'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth)/*')
   .get(errors[404]);

};
