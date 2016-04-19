/**
 * User
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		index: {
			unique: true,
		}
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
	}
}, {
	timestamps: true,
})

UserSchema.options.toJSON = {
	transform: function(doc, ret, options) {
	  delete ret.password;
	  return ret;
  }
};

var collection = "Users";
var model = mongoose.model(collection, UserSchema);

module.exports = model;
