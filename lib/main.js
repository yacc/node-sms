function sendsms(cellphone,carrier) {
  if (arguments.length < 2) {
    return 'Please provide a phone number, a phone carrier';
   }
  // if (typeof arguments[0] != "string") {
  //   alert("Has to be string");
  // }
  return true;
}


module.exports = sendsms;