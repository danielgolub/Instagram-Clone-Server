/**
 * Dependencies
 */
var express = require('express');
var HomePageController = require("./controllers/HomePage")

/**
 * Variables
 */
var app = express();

/**
 * Endpoints
 */
app.get('/', HomePageController);

/**
 * Bootstrap
 */
app.listen(3000, function () {

	var host = this.address().address
	var port = this.address().port

	console.log("Server is listening at *:%s", port)

})
