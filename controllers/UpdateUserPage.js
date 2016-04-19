/**
 * Dependencies
 */
var User = require("../models/User");

function UpdateUserPageController(req, res)
{
	const email = req.user.email;
	const password = req.user.password;

	User.update({
		email: email,
		password: password
	}, req.body, function(err) {
		if(err) {
			return res.sendStatus(500);
		}

		res.sendStatus(200);
	});
}

module.exports = UpdateUserPageController;
