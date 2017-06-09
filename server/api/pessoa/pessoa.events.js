/**
 * Pessoa model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Pessoa = require('../../sqldb').Pessoa;
var PessoaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PessoaEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Pessoa.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    
    PessoaEvents.emit(event + ':' + doc.id, doc);
    PessoaEvents.emit(event, doc);
    done(null);
  }
}

module.exports = PessoaEvents;
