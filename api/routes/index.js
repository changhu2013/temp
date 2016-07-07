var co = require('co');
var config  = require('../../config');
var router  = require('koa-router')(config.router || {});
var navi    = require('../services/navi');
var collect = require('../services/collect');

router.post('/navi', co.wrap(navi));
router.post('/collect', co.wrap(collect));

module.exports = router;