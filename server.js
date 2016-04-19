/**
 * Dependencies
 */
var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("config");

var HomePageController = require("./controllers/HomePage")
var RegisterPageController = require("./controllers/RegisterPage")
var LoginPageController = require("./controllers/LoginPage")

var LoginMiddleware = require("./middlewares/Login")
var ValidateParamsMiddleware = require("./middlewares/ValidateParams")

/**
 * Variables
 */
var app = express();
const DB_CONFIG = config.get("Deployment.dbConfig");
var db = mongoose.connection;
var user = "";
if(DB_CONFIG.username) {
	user = DB_CONFIG.username;
	if(DB_CONFIG.password) {
		user += ":"+DB_CONFIG.password;
	}
	user += "@";
}
const DB_CONNECTION_STRING = "mongodb://{user}{host}:{port}/{database}"
														 .replace("{user}", user)
														 .replace("{host}", DB_CONFIG.host)
														 .replace("{port}", DB_CONFIG.port)
														 .replace("{database}", DB_CONFIG.dbName);
const PORT = process.env.PORT || config.get("Deployment.port");

/**
 * Endpoints
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', HomePageController);
app.post('/user/create', ValidateParamsMiddleware, RegisterPageController);
app.get('/user/login', ValidateParamsMiddleware, LoginPageController);

/**
 * Bootstrap
 */
app.listen(PORT, function () {

	var host = this.address().address
	var port = this.address().port

	console.log("Server is listening at *:%s", port)

})

/**
 * Database setup
 */
mongoose.connect(DB_CONNECTION_STRING, {uri_decode_auth: true});
