const User = require('../models/user-mongo.js');
const Room = require('../models/room-mongo.js');
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

var ERROR = {
	isError: true,
	message: '服务器出错了...'
}

module.exports = {
	createUser: async (account, password, nickname) => {
		let salt = await bluebird.promisify(bcrypt.genSalt)(10);
		password = await bluebird.promisify(bcrypt.hash)(password, salt);
		let user = await User.findOneUser({ account: account });
		let room = await Room.findOne({ name: config.INIT_ROOM }); 
		if(user && room) {
			return {isError: true, message: '用户已存在'}
		}
		let newUser = await User.create({
			account: account,
			password: password,
			nickname: nickname,
			avatar: '',
			sex: '未知',
			info: '',
			friends:['account'],
			notify: [],
			myApplyLists: [],
			onlineState: 1,
			rooms: [room._id]
		})
		if (newUser) {
			room.users.push(newUser._id);
			await room.save();
			return {token: _genJwt(account)}
		}
		return ERROR;
	},
	verifyUser: async (account, password) => {
		let user = await User.findOneUser({ account: account });
		if(!user) {
			return {
				isError: true,
				message: '用户不存在'
			}
		}
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
	},
	searchUsers: async(name) => {
		let users = await User.find({nickname: { $regex: name, $options: 'i' } });
		if(users && Array.isArray(users)) {
			return {
				userLists: users
			}
		} else {
			return {
				isError: true,
				message: '查询失败'
			}
		}
	},
	applyFriend: async(info, socket) => { 
		//发起好友申请
		//通知对方
		let friend = await User.findOneUser({ account: info.friendAccount });
		let slef = await User.findOneUser({ account: info.selfAccount });
		if(slef && friend) {
			const myApplyLists = slef.myApplyLists.push({account: info.friendAccoun});
			const notify = friend.notify.push({account: info.selfAccount});
			let result_self = await User.update({account: info.selfAccount}, { myApplyLists: myApplyLists });
			let result_friend = await User.update({account: info.friendAccount}, { notify: notify });
			// console.log(socket)
			// socket.broadcast.to(info.friendAccount).emit('applyMessage', slef);
			return {
				result: socket
			}
		} else {
			return {
				isError: true,
				message: '添加好友失败'
			}
		}
		
	}
}