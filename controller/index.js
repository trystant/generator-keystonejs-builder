'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'keystone:controller subgenerator'
    });

    this.log('You called the keystone:controller subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('controller.js'),
      this.destinationPath('routes/views/' + this.name + '.js'),
      { controllerName: this.name }
    );
  }
});
