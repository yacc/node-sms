var should = require('should');
var sendsms = require('../lib/main');

describe('sendsms', function() {
  describe('with no arguments', function() {
   it('returns an error', function() {
     var result = sendsms();
     result.should.eql('Please provide a phone number, a phone carrier and a country');
   });
 });
});

