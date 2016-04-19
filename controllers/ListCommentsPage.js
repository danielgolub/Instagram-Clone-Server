/**
 * Dependencies
 */
var Comment = require("../models/Comment");

function ListCommentsPageController(req, res)
{
	Comment.find({ photoId: req.params.id }, function(err, comments) {
		if(err) {
			return res.sendStatus(500)
		}

		res.send(comments);
	})
}

module.exports = ListCommentsPageController;
