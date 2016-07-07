var config  = require('../../config');
var router  = require('koa-router')(config.router || {});
var navi    = require('../services/navi');
var collect = require('../services/collect');

router.post('/navi', navi);
router.post('/collect', collect);

module.exports = router;