'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('keystonejs-builder:model', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../model'))
      .withArguments('User')
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates a model file', function () {
    assert.file(['User.js']);
  });
});
