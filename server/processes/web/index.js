'use strict';

const koa = require('koa');
const session = require('koa-session');
const path = require('path');
const config = require('../../config');
const BoarServer = require('boar-server').app;

const createApp = function() {
  const app = koa();
  const server = new BoarServer(app);

  app.keys = ['secret'];
  app.use(session(app));

  server.loadControllers(path.join(config.root, 'controllers'));
  return app;
};

if (!module.parent) {
  createApp().listen(config.port);
  console.log(`Server is listening on port: ${config.port}`);
}

module.exports = createApp;
