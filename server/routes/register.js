const router = require('koa-router')();
const user = require('../controllers/user.js');

router.post('/register', async (ctx, next) => {
	const {account, password, nickname} = ctx.request.body;
	const info = await user.createUser(account, password, nickname);
  ctx.body = {code: 0, data: info}
})


module.exports = router
