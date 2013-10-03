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

  callback('message sent to +' + args[0] + ' ' + args[1] + ' through ' + args[2]);
}


module.exports = sendsms;