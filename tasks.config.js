'use strict';

let environmentVariables = {
  DEBUG: 'suite-sdk,suiterequest',
  PORT: 9100,
  BASE_URL: 'http://localhost:9100',
  NODE_ENV: 'development',
  NO_SSL_ENFORCE: 'true',

  SUITE_API_ENVIRONMENT: 'suite.ett.local',
  SUITE_API_SECURE: false,
  SUITE_API_PORT: 80
};

module.exports = {
  server: {
    filePattern: ['!server/**/*.factory.*', '!server/**/*.spec.*', 'server/**/*.{jade,js,css,json}',  'package.json', 'trace.config.js', 'Procfile'],
    environmentVariables: environmentVariables,
    runnable: 'dist/processes/web/index.js',
    test: {
      environmentVariables: {
        NODE_ENV: 'test'
      },
      flags: ['reporter dot', 'colors']
    }
  }
};
