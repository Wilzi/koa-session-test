'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const dotenv = require('dotenv');
const config = require('./tasks.config');
const tasks = require('boar-tasks-server').getTasks(gulp, config);

gulp.task('build', ['build-clean'], function(cb) {
  runSequence(['server-copy'], cb);
});

gulp.task('start', ['build'], function(cb) {
  dotenv.load({ silent: true });
  runSequence(['server', 'server-watch'], cb);
});

gulp.task('test', ['code-style', 'server-test']);

gulp.task('build-clean', function(cb) {
  tasks.build.clean(cb);
});

gulp.task('server', tasks.server.start);
gulp.task('server-copy', function() {
  return tasks.server.copy(false);
});
gulp.task('server-copy-only-changed', function() {
  return tasks.server.copy(true);
});
gulp.task('code-style', function() {
  return tasks.server.codeStyle();
});
gulp.task('server-watch', function() {
  gulp.watch(tasks.config.server.filePattern, ['server-copy-only-changed'])
});
gulp.task('server-test', tasks.server.test);

gulp.task('processes-clock', function(cb) {
  dotenv.load({ silent: true });
  return tasks.server.runCommand('server/processes/clock', cb);
});
