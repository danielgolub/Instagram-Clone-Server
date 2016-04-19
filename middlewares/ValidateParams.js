/**
 * Variables
 */
const paths = {
	"/user/create": {
		"username": function(str) {
			return (str && str.length);
		},
		"password": function(str) {
			return (str && str.length && str.length > 5);
		},
	},
	"/user/login": {
		"username": function(str) {
			return (str && str.length);
		},
		"password": function(str) {
			return (str && str.length && str.length > 5);
		},
	},
	"/user/update": {
		"name": function(str) {
			return (str.length);
		},
	},

	"/photo/create": {
		"description": function(str) {
			return (str.length);
		},
		"base64": function(str) {
			return (str.length);
		},
	},

	"/photo/:id/comment/create": {
		"text": function(str) {
			return (str.length);
		},
	},
}

function ValidateParamsMiddleware(req, res, next) {
	var body;
	if(req.method == "GET") {
		body = req.query;
	}
	else {
		body = req.body;
	}

	// if no validation procedure set, just go to the next middleware/controller
	if(paths[req.originalUrl.replace("{id}", req.params['id'])]) {
		var i, param;

		// make sure the length of the body equals to the validation parameters length
		if(Object.keys(paths[req.originalUrl]).length != Object.keys(body).length) {
			return res.sendStatus(400);
		}

		// make sure the parameter's validation function succeed
		for(i in paths[req.originalUrl]) {
			param = paths[req.originalUrl][i];

			if(!param(body[i])) {
				return res.sendStatus(400);
			}
		}
	}

	return next();
}

module.exports = ValidateParamsMiddleware;
