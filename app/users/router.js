var express = require('express');
var router = express.Router();
const { viewSignin, actionSignin, acionLogout } = require('./controller');

/* GET home page. */
router.get('/', viewSignin);
router.post('/', actionSignin);
router.get('/logout', acionLogout);

module.exports = router;
