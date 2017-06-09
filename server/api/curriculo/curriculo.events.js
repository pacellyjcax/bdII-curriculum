/**
 * Curriculo model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Curriculo = require('../../sqldb').Curriculo;
var CurriculoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CurriculoEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Curriculo.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    
    CurriculoEvents.emit(event + ':' + doc.id, doc);
    CurriculoEvents.emit(event, doc);
    done(null);
  }
}

module.exports = CurriculoEvents;
