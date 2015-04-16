'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'keystone:model generator'
    });

    this.log('You called the keystone:model subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('model.js'),
      this.destinationPath('models/' + this.name + '.js'),
      { modelName: this.name }
    );
  }
});
