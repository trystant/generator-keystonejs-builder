'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');



describe('keystonejs-builder:model <model>', function () {
  describe("on success", function() {
    beforeEach(function (done) {
      helpers.run(path.join(__dirname, '../model'))
        .withOptions({ skipInstall: true })
        .withArguments('User')
        .withPrompts({ someOption: true })
        .on('end', done);
    });

    it('creates a model file', function () {
      assert.file(['models/User.js']);
    });

    it('changes {modelName} in the destination file', function () {
      assert.fileContent('models/User.js', 'User');
    });

    it('instantiates the model', function () {
      assert.fileContent('models/User.js', "var User = new keystone.List('User');");
    });

    it('registers the model', function () {
      assert.fileContent('models/User.js', "User.register();");
    });
  });

  describe("on failure", function() {
    beforeEach(function (done) {
      helpers.run(path.join(__dirname, '../model'))
        .withOptions({ skipInstall: true })
        .withArguments('Users')
        .withPrompts({ someOption: true })
        .on('end', done);
    });

    it('creates a model file', function () {
      var assertionError = function() { throw new AssertionError("Wrong value"); };
      assert.throws(assertionError);
    });
  });
});
