var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * <%= modelName %> Model
 * ==========
 */

// Model creation
 var <%= modelName %> = new keystone.List('<%= modelName %>');


 /**
 * Registration
 */

<%= modelName %>.defaultColumns = '';
<%= modelName %>.register();