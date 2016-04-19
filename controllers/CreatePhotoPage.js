/**
 * Dependencies
 */
var Photo = require("../models/Photo");

function CreatePhotoPageController(req, res)
{
	var photo = new Photo({
		owner: {
			username: req.user.username,
			name: req.user.name,
		},
		base64: req.body.base64,
	})
	photo.save(function(err) {
		if(err) {
			return res.sendStatus(500);
		}

		return res.send(photo, 201);
	})
}

module.exports = CreatePhotoPageController;
