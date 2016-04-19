/**
 * Dependencies
 */
var Comment = require("../models/Comment");
var Photo = require("../models/Photo");

function CreateCommentPageController(req, res)
{
	Photo.findOne({
		_id: req.params.id
	}, {}, function(err, photo) {
		if(err) {
			return res.sendStatus(500);
		}
		if(!photo) {
			return res.sendStatus(404)
		}

		var comment = new Comment({
			owner: {
				username: req.user.username,
				name: req.user.name,
			},
			text: req.body.base64,
			photoId: req.params.id
		})
		comment.save(function(err) {
			if(err) {
				return res.sendStatus(500);
			}

			return res.send(comment, 201);
		})
	})
}

module.exports = CreateCommentPageController;
