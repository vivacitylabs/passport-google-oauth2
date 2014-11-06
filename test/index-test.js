var vows = require('vows');
var assert = require('assert');
var util = require('util');
var google = require('../');


vows.describe('passport-google-oauth2').addBatch({
  
  'module': {
    'should export OAuth 2.0 strategy': function (x) {
      assert.isFunction(google);
    },
  },
  
}).export(module);
