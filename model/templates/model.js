var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * <%= modelName %> Model
 * ==========
 */

// Model creation
 var <%= modelName %> = new keystone.List('<%= modelName %>');



// Provide access to Keystone
<%= modelName %>.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
* Registration
*/

<%= modelName %>.defaultColumns = '';
<%= modelName %>.register();