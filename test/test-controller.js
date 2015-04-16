'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');



describe('keystone:controller <controller>', function () {
  describe("on success", function() {
    beforeEach(function (done) {
      helpers.run(path.join(__dirname, '../controller'))
        .withOptions({ skipInstall: true })
        .withArguments('User')
        .withPrompts({ someOption: true })
        .on('end', done);
    });

    it('creates a  file', function () {
      assert.file(['routes/views/user.js']);
    });

    it('changes {controllerName} in the destination file', function () {
      assert.fileContent('routes/views/user.js', 'User');
    });

    it('instantiates the view', function () {
      assert.fileContent('routes/views/user.js', "var view = new keystone.View(req, res),");
    });
  });

  describe("on failure", function() {
    beforeEach(function (done) {
      helpers.run(path.join(__dirname, '../controller'))
        .withOptions({ skipInstall: true })
        .withArguments('Users')
        .withPrompts({ someOption: true })
        .on('end', done);
    });

    it('creates a controller file', function () {
      var assertionError = function() { throw new AssertionError("Wrong value"); };
      assert.throws(assertionError);
    });
  });
});
