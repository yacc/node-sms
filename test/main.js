var should = require('should');
var sendsms = require('../lib/main');

describe('sendsms', function() {

  describe('with an empty array argument', function() {
    it('calls the callback with an empty array', function(done) {
      var result = sendsms([], function(result) {
        result.should.eql('Please provide a country code, a phone number (6503944444) and a phone carrier');
        done();
      });
    });
  });

  describe('with valid arguments', function() {
    it('calls the callback with a success message', function(done) {
      var sms = sendsms(['US','6503444444','TMobile'], function(err,result) {
        result.should.eql('message sent to +1 6503444444 through TMobile');
        done();
      });
    });
  });


});

