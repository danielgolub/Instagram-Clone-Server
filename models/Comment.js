/**
 * User
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	owner: {
		username: {
			type: String,
		},
		name: {
			type: String,
		},
	},
	text: {
		type: String,
	},
	photoId: {
		type: String,
	},
}, {
	timestamps: true,
})

var collection = "Comments";
var model = mongoose.model(collection, CommentSchema);

module.exports = model;
