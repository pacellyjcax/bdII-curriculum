/**
 * Experiencia model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Experiencia = require('../../sqldb').Experiencia;
var ExperienciaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ExperienciaEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Experiencia.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    
    ExperienciaEvents.emit(event + ':' + doc.id, doc);
    ExperienciaEvents.emit(event, doc);
    done(null);
  }
}

module.exports = ExperienciaEvents;
