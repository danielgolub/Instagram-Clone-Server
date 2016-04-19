/**
 * Dependencies
 */
var User = require("../models/User");

function LoginMiddleware(req, res, next) {
	var body = req.headers.authorization;

	if(!body) {
		return res.sendStatus(403);
	}

	body = body.split(" ")[1];

	var buf = new Buffer(body, 'base64');

	var user = buf.toString().split(":");
	const username = user[0];
	const password = user[1];

	User.findOne({ username: username, password: password }, { name: true, }, function(err, user) {
		if(err) {
			return res.sendStatus(500);
		}
		if(!user) {
			return res.sendStatus(401);
		}

		req.user = {
			username: username,
			password: password,
			name: user.name,
		};

		return next();
	})
}

module.exports = LoginMiddleware;
