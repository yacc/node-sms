node-sms
========
[![Build Status](https://travis-ci.org/yacc/node-sms.png)](https://travis-ci.org/yacc/node-sms)  Email to SMS gateway nodejs modules

Want to send an SMS from your Node application? node-sms allows you to do just that. 
It allows you to send a text message in the form of an e-mail to a cell phone on any of the many supported carriers.

Status
======
In active development, not production ready yet.
ETA for fully functional version end of Oct 2013. 

Supported Carrier (US & International)
======================================
Alltel, Ameritech, AT&T, Bell Atlantic, BellSouth Mobility, Beeline(UA), BlueSkyFrog, Boost Mobile, BPL Mobile, Cellular South, Claro (Brazil, Nicaragua), Comcast, Du, E-Plus, Etisalat, Fido, kajeet, Mobinil, Mobitel, Movistar, Metro PCS, O2, Orange, Powertel, PSC Wireless, Qwest, Rogers, Southern Link, Sprint, Suncom, T-Mobile (US/UK/Germany), Telefonica, Tracfone, Virgin Mobile, Verizon Wireless, Vodafone (UK, Egypt, Italy, Japan, Spain), and many more …

Some International carriers require that their users subscribe to an Email to SMS feature before they are able to receive SMS messages this way. If one your users mentions that they are not receiving their messages, chances are it is due to this limitation. Some of these carriers are include, Mobitel, Etisalat, T-Mobile (Netherlands)


Dependencies
============
node-sms relies on nodemailer for sending email.
node-sms requires a smtpTransport to be defined using whatever transport nodemailer supports.

Wishlist
========
* View Helper (list of all supported carrier to build a dropdown menu)
* Support for other mailers


Running Tests
=============
change to the root directory of the module, then ran the following command.

    npm test

Impiration
==========
this nodejs module was inspired by the "sms-fu" Ruy on Rails plugin https://github.com/yacc/sms-fu