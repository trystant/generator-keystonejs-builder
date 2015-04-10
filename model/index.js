'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
  model: function() {
    this.fs.copyTpl(
      this.templatePath('model.js'),
      this.destinationPath('models/' + this.name + '.js'),
      { modelName: this.name }
    );

  }
});
