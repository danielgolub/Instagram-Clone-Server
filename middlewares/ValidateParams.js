/**
 * Variables
 */
const paths = {
	"/user/create": {
		"email": function(str) {
			return (str.length && str.indexOf("@") > -1);
		},
		"password": function(str) {
			return (str.length && str.length > 5);
		},
	},
	"/user/login": {
		"email": function(str) {
			return (str.length && str.indexOf("@") > -1);
		},
		"password": function(str) {
			return (str.length && str.length > 5);
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

	if(paths[req.originalUrl]) {
		var i, param;
		for(i in paths[req.originalUrl]) {
			param = paths[req.originalUrl][i];

			if(!body[i] || !param(body[i])) {
				return res.sendStatus(400);
			}
		}
	}

	return next();
}

module.exports = ValidateParamsMiddleware;
