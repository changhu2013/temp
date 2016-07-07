
var navi = function * (ctx, next){

   console.log(ctx);

   ctx.body = 'navi';
}

module.exports = navi;