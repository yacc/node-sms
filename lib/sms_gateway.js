var nodemailer = require("nodemailer");
var Carrier = require('../lib/carrier').Carrier;

// Expose to the world
module.exports.SmsGateway = SmsGateway;

/**
 * <p>Generates an SmsGateway with an email transport </p>
 *
 * @constructor
 * @param {String} country The country of the carrier
 * @param {String} carrier The carrier common name
 */
 function SmsGateway(country, carrier, transport, callback){
  var code = 0;
  var msg  = 'Email Gateway ready!';

  if (this.carrier = new Carrier(country,carrier,callback)) {
    if (!(this.transport = nodemailer.createTransport(transport.type,transport.options))){
      code = 1;
      msg  = 'Failed to initialize email transport layer';
    };
  };

  if(typeof callback == "function"){
    callback(code?new Error(msg):null, {message: msg, carrier: this.carrier});
  }

}

/**
 * <p>Sends a </p>
 *
 * @param {String} cell phone number
 * @param {String} body of text message
 * @param {function} callback function
*/
SmsGateway.prototype.send = function(to_number,body,callback){
  this.to_email  = this.carrier.email(to_number);
  this.body      = (body || "").toString().trim();

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: this.from_address,
      to: this.to_email,
      text: this.boby,
      html: '<b>' + this.body + '</b>'
  }
  this.transport.sendMail(mailOptions, callback);
};
