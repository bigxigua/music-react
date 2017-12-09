const User = require('../models/user-mongo.js');
const bluebird = require('bluebird');
const bcrypt = require('bcrypt');
const config = require('../config/init.js');
const jwt = require('jsonwebtoken') //jsp 基于token的身份验证

const _genJwt = (account) => {
	return jwt.sign({
						user: account,
						exp: Math.floor((new Date().getTime())/1000) + 60 * 60 * 24 * 30
				}, config.JWT_KEY)
}

module.exports = {
	createUser: async (account, password, nickname) => {
		let salt = await bluebird.promisify(bcrypt.genSalt)(10);
		password = await bluebird.promisify(bcrypt.hash)(password, salt);
		let user = await User.findOneUser({ account: account });
		if(user) {
			return {isError: true, message: '用户已存在'}
		}
		let newUser = await User.create({
			account: account,
			password: password,
			nickname: nickname,
			avatar: '',
			sex: '未知',
			info: '',
			onlineState: 1
		})
		return {token: _genJwt(account)}
	},
	verifyUser: async (account, password) => {
		let user = await User.findOneUser({ account: account });
		if(!user) {
			return {
				isError: true,
				message: '用户不存在'
			}
		}
		console.log(user)
		let compareResult = bluebird.promisify(bcrypt.compare)(password, user.password);
		if(compareResult) {
			return {token: _genJwt(account)}
		}
	},
	getUserInfo: async(account) => {
		let user = await User.findOneUser({ account: account });
		if(user) {
			return {
				nickname: user.nickname,
				account: user.account,
				avatar: user.avatar,
				info: user.info,
				onlineState: user.onlineState
			}
		} else {
			return {
				isError: true,
				message: '用户不存在'
			}
		}
	}
}