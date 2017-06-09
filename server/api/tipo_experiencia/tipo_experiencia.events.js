/**
 * TipoExperiencia model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var TipoExperiencia = require('../../sqldb').TipoExperiencia;
var TipoExperienciaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TipoExperienciaEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  TipoExperiencia.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    
    TipoExperienciaEvents.emit(event + ':' + doc.id, doc);
    TipoExperienciaEvents.emit(event, doc);
    done(null);
  }
}

module.exports = TipoExperienciaEvents;
