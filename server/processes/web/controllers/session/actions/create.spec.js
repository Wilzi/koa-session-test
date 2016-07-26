'use strict';

const request = require('co-supertest');
const createApp = require('../../../index');

describe('Session create', function() {

  let app;

  const expectedSession = {
    user: {
      customerId: 42
    }
  };

  beforeEach(function() {
    app = createApp();

    app.use(function *() {
      this.session = expectedSession;
    });
  });

  it('should respond with mocked session object', function *() {
    let response = yield request(app.listen())
      .get('/session')
      .expect(200)
      .set('cookie', 'XSRF-TOKEN=dummy')
      .set('x-xsrf-token', 'dummy')
      .end();

    expect(response.body).to.eql(expectedSession);
  });
});
