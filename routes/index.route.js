var express = require('express');
var router = express.Router();
//importamos el objeto controller
const controller = require('../controllers/index.controller');
/* GET home page. */
 router.get('/', controller.index);

 router.post('/login', controller.login);

module.exports = router;
