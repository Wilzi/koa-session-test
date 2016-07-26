'use strict';

const controllerFactory = require('boar-server').lib.controllerFactory;
const sessionAction = require('./actions/create');
const sessionAuthMiddleware = require('../../middlewares/sessionAuth').sessionAuth;

module.exports = controllerFactory.create(function(router) {
  router.get('/session', sessionAuthMiddleware(), sessionAction);
});
