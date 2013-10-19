var should = require('should');
var SmsGateway = require('../lib/sms_gateway').SmsGateway;

describe('SmsGateway', function() {

  describe('with unknow country and/or SmsGateway', function() {
    it('calls the callback with an error message', function(done) {
      var smsGateway = new SmsGateway('USofA', 'Tmobile', ["SMTP",{service: "Gmail", auth: {user: "tt@tt.tt",pass: "passcode"}}],function(err,result) {
        result.should.eql({"message": "Country USofA not supported","carrier": {"country": "USOFA","known_as": "tmobile"}});
        done();
      });
    });
  });

  describe('with valid arguments', function() {
    it('generates a valid email', function(done) {
      var smsGateway = new SmsGateway('US', 'Tmobile', ["SMTP",{}],function(err,result) {
        result.should.eql({"message": "Email Gateway ready!","carrier": {"country": "US","known_as": "tmobile","name": "T-Mobile","template": "{{number}}@tmomail.net"}});
        done();
      });
    });
  });

});

