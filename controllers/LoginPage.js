/**
 * Dependencies
 */
var User = require("../models/User");

function LoginPageController(req, res)
{
	const username = req.query.username;
	const password = req.query.password;

	User.findOne({
		username: username,
		password: password,
	}, {}, function(err, user) {
		if(err) {
			return res.sendStatus(500);
		}
		if(!user) {
			return res.sendStatus(404)
		}

		return res.send(user, 200);
	})
}

module.exports = LoginPageController;
