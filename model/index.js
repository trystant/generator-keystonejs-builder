'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
  model: function() {
    this.fs.copy(
      this.templatePath('model.js'),
      this.destinationPath(this.name + '.js')
    );
  }
});
