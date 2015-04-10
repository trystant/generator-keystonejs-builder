var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * <%= modelName %> Model
 * ==========
 */

// Model creation
 var <%= modelName %> = new keystone.List('<%= modelName %>', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});