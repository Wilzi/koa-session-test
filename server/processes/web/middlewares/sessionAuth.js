'use strict';

let crypto = require('crypto');

let sessionAuth = function() {
  return function *sessionAuth(next) {
    if (this.session && this.session.user && this.session.user.customerId) {
      if (this.request.method === 'GET' || this.cookies.get('XSRF-TOKEN') === this.request.header['x-xsrf-token']) {
        yield next;
      } else {
        this.throw(401);
      }
    } else {
      this.throw(401);
    }
    let csrfToken = crypto.randomBytes(16).toString('hex');
    this.cookies.set('XSRF-TOKEN', csrfToken, { httpOnly: false });
  };
};

module.exports = { sessionAuth: sessionAuth };
