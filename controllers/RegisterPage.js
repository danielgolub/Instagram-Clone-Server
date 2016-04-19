/**
 * Dependencies
 */
var User = require("../models/User");

function RegisterPageController(req, res)
{
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({
		email: email,
	}, {}, function(err, user) {
		if(err) {
			return res.sendStatus(500);
		}
		if(user) {
			return res.sendStatus(409)
		}

		var user = new User({
			email: email,
			password: password,
		})
		user.save(function(err) {
			if(err) {
				return res.sendStatus(500);
			}

			res.sendStatus(201);
		})
	})
}

module.exports = RegisterPageController;
