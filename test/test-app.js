'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var mock = require('mock-fs');

/** Mock filesystem setup */


var modelMockTemplate = "var keystone = require('keystone')," +
" Types = keystone.Field.Types;" +
" " +
"/**" +
" * <%= modelName %> Model" +
" * ==========" +
" */" +
" " +
"// Model creation" +
" var <%= modelName %> = new keystone.List('<%= modelName %>', {" +
" map: { name: 'title' }," +
" autokey: { path: 'slug', from: 'title', unique: true }" +
"});";


describe('keystonejs-builder:model', function () {
  describe("on success", function() {
    beforeEach(function (done) {
      helpers.run(path.join(__dirname, '../model'))
        .withOptions({ skipInstall: true })
        .withArguments('User')
        .withPrompts({ someOption: true })
        .on('end', done);
    });

    it('creates a model file', function () {
      assert.file(['User.js']);
    });

    it('changes {modelName} to User in the file', function () {
      assert.fileContent('User.js', 'User');
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
