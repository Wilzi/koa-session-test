'use strict';

var path = require('path');

module.exports = {
  root: path.normalize(__dirname + '/../processes/web'),
  env: process.env.NODE_ENV,

  ip: process.env.IP || undefined,
  port: process.env.PORT || 3000,

  customerId: process.env.CUSTOMER_ID,

  escher: {
    keyPool: process.env.SUITE_ESCHER_KEY_POOL,
    credentialScope: process.env.SUITE_ESCHER_CREDENTIAL_SCOPE
  },

  clockCronString: process.env.CLOCK_CRON_STRING

};
