var Carrier = require("./carrier").Carrier;
var SmsGateway = require("./sms_gateway").SmsGateway;

// args     : [country_code,phone_number,carrier]
// callback : callback to execute
//
function sendsms(args,callback) {
  var valid_number = /^\d{1,12}/;

  if (args.length < 3)
    return process.nextTick(function() {callback('Please provide a country code, a phone number (6503944444) and a phone carrier');});
  
  if (typeof args[1].search(valid_number)==-1 )
    return process.nextTick(function() {callback('Please provide the phone number using this format +[country code][area code][number]');});

  if (typeof args[2] != "string") 
    return process.nextTick(function() {callback('Phone carrier has to be a string');});

  var country = args[0];
  var phone   = args[1];
  var carrier = args[2];

  // create reusable transport method (opens pool of SMTP connections)
  var smtpTransport = ["SMTP",{
    service: "Gmail",
    auth: {
        user: "xxxxx@xxxx.com",
        pass: "ZuperZecret"
    }
  }];

  new SmsGateway(country,carrier,smtpTransport,function(err,sms2email){
    if (err) {
      console.error(err.stack);
      return;
    } else {
      sms2email.send(phone,'test message',callback);      
    }
  });
}

module.exports = sendsms;