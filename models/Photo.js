/**
 * User
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
	owner: {
		username: {
			type: String,
		},
		name: {
			type: String,
		},
	},
	description: {
		type: String,
	},
	base64: {
		type: String,
	},
	likes: {
		type: Number,
		default: 0,
	}
}, {
	timestamps: true,
})

var collection = "Photos";
var model = mongoose.model(collection, PhotoSchema);

module.exports = model;
