/**
 * Dependencies
 */
var Photo = require("../models/Photo");

function ListPhotoPageController(req, res)
{
	Photo.find({}, function(err, photos) {
		if(err) {
			return res.sendStatus(500);
		}

		res.send(photos)
	})
}

module.exports = ListPhotoPageController;
