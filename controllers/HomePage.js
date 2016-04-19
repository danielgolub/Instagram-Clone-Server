/**
 * Dependencies
 */
var config = require("config");

/**
 * Variables
 */
const version = config.get("General.version");

function HomePageController(req, res)
{
	res.send("<h1>Server version: {version}</h1>".replace("{version}", version))
}

module.exports = HomePageController;
