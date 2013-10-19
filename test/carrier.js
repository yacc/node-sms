var should = require('should');
var Carrier = require('../lib/carrier').Carrier;

describe('Carrier', function() {

  describe('with unknow country and/or carrier', function() {
    it('calls the callback with an error message', function(done) {
      var carrier = new Carrier('USofA', 'Tmobile', function(err,result) {
        result.should.eql({ message: 'Country USofA not supported', emailTemplate: undefined });
        done();
      });
    });
    it('calls the callback with an error message', function(done) {
      var carrier = new Carrier('US', 'TmobileSucks', function(err,result) {
        result.should.eql({ message: 'Carrier TmobileSucks not supported', emailTemplate: undefined });
        done();
      });
    });
  });

  describe('with valid arguments', function() {
    it('generates a valid email', function(done) {
      var carrier = new Carrier('US', 'Tmobile', function(err,result) {
        result.should.eql({ message: 'Country and carrier supported, yeah !', emailTemplate: '{{number}}@tmomail.net' });
        done();
      });
    });
  });

});

