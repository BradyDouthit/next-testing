module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+yog":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = __webpack_require__("kZEJ");

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  let courseId = 1;
  let moduleProgress = {};
  let postTestStatus = {
    open: true,
    locked: false,
    toolTip: ''
  };
  let score = 0;
  let awardedScores = {};
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    title: "Home | " + config.herokuAppName,
    courseId: courseId,
    moduleProgress,
    postTestStatus,
    score,
    awardedScores
  }));
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+yog");


/***/ }),

/***/ "kZEJ":
/***/ (function(module, exports, __webpack_require__) {

var config = {};

if (false) {}

config.port = process.env.PORT || '3000';
config.host = process.env.HOST || 'localhost';
config.canvasURL = process.env.CANVAS_URL;
config.client_id = process.env.CANVAS_KEY;
config.client_secret = process.env.DEVELOPER_TOKEN;
config.redirectURL = process.env.REDIRECT_URL;
config.canvasAdminAuthToken = process.env.CANVAS_ADMIN_AUTH_TOKEN;
config.canvasPageResults = process.env.CANVAS_PAGE_RESULTS || "200";
config.redisURL = process.env.REDIS_URL || '';
config.mongo_username = process.env.MONGO_USERNAME || 'localhost', config.mongo_password = process.env.MONGO_PASSWORD || '', config.local_mongo_database = 'mongodb://localhost:27017/oneyxs_dev';
config.disableLeaderboard = process.env.DISABLE_LEADERBOARD.toLowerCase() == 'false' ? true :  false || false; //configure MongoDB urls here - course ID to mongoDB URL

config.mongoURL = 'mongodb://' + config.mongo_username + ':' + config.mongo_password + '@conexcluster-shard-00-00-bgeoe.mongodb.net:27017,conexcluster-shard-00-01-bgeoe.mongodb.net:27017,conexcluster-shard-00-02-bgeoe.mongodb.net:27017/test?ssl=true&replicaSet=ConexCluster-shard-0&authSource=admin&retryWrites=true'; //add to list if we create new courses
//format is courseID: databaseName

config.mongoDBs = {
  '2517': 'blue',
  '3528': 'orange',
  '3529': 'white',
  '3559': 'conexDemo',
  '4887': 'conexBlue20',
  '4888': 'conexDemo20',
  '5710': 'smithDemo20',
  '5713': 'trinity20',
  '5772': 'conexWhite20',
  '5773': 'conexOrange20',
  '48080': 'smith',
  '48036': 'yale-blue',
  '48037': 'yale-gray',
  '48039': 'yale-physics',
  '48038': 'yale-white'
}; //the name of the mongo db to connect to

config.mongo_db_name = process.env.MONGO_DB_NAME;
config.cookieduration = 1000 * 60 * 60 * 24;
config.herokuAppName = process.env.HEROKU_APP_NAME;
config.testApp = process.env.TEST_SERVER;
module.exports = config;

/***/ })

/******/ });