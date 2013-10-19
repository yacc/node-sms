var inflection = require('inflection');

// Expose to the world
module.exports.Carrier = Carrier;

/**
 * Hash of available countries with available carriers and their email gateways
 * follows ISO 3166-1-alpha-2 code 
 * http://www.iso.org/iso/country_codes/iso_3166_code_lists/country_names_and_code_elements.htm
 */
Carrier.countries = {
    "US":{
        "tmobile": {
            "name": "T-Mobile",
            "template": "{{number}}@tmomail.net"
        },
        "att":{
            "name": "AT&T",
            "template": "{{number}}@txt.att.net"
        },
        "verizon":{
            "name": "Verizon Wireless",
            "template": "{{number}}@vtext.com"
        }
    },
    "GB":{

    },
    "FR":{

    }
};

/**
 * <p>Generates a Carrier from a country and carrier name</p>
 *
 * <p>All Carrier need to have a country and a carrier name property defined
 *
 * @constructor
 * @param {String} country The country of the carrier
 * @param {String} carrier The symbol for the (derived from the name of the carrier)
 */
function Carrier(country, known_as, callback){
  var code = 0;
  var msg  = '';

  this.country = (country || "").toString().trim().toUpperCase();
  this.known_as = inflection.underscore( (known_as || "").toString().trim());

  if (this.country in Carrier.countries) {
    if (this.known_as in Carrier.countries[this.country]) {
        var carrier = Carrier.countries[this.country][this.known_as];
        if (carrier) {
            this.name     = carrier.name; 
            this.template = carrier.template; 
            msg = 'Country and carrier supported, yeah !';
        } 
    } else {
        code = 1;
        msg  += 'Carrier ' + known_as +' not supported'
    }
  } else {
      code = 1;
      msg  += 'Country ' + country + ' not supported';
  }

  if(typeof callback == "function"){
      callback(code?new Error(msg):null, {message: msg, emailTemplate: this.template});
  }    
};


/**
 * <p>Generates an emails address to reach a cell phone by text</p>
 *
 * @param {String} cell phone number
 */
Carrier.prototype.email = function(number){
  this.number = number;
  //TODO: validate phone number
  // if iz.phone(number) {

  // }
  this.email = this.template.replace('{{number}}',this.number);
};


