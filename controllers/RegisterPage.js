/**
 * Dependencies
 */
var User = require("../models/User");

function RegisterPageController(req, res)
{
	const username = req.body.username;
	const password = req.body.password;

	User.findOne({
		username: username,
	}, {}, function(err, user) {
		if(err) {
			return res.sendStatus(500);
		}
		if(user) {
			return res.sendStatus(409)
		}

		var user = new User({
			username: username,
			password: password,
		})
		user.save(function(err) {
			if(err) {
				console.info(err)
				return res.sendStatus(500);
			}

			res.send(user, 201);
		})
	})
}

module.exports = RegisterPageController;
