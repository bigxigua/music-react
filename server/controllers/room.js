const Room = require('../models/room-mongo.js');
const User = require('../models/user-mongo.js');
const History = require('../models/history-mongo.js');
const bluebird = require('bluebird');
const bcrypt = require('bcrypt');
const config = require('../config/init.js');
const util = require('../util/util.js');
const jwt = require('jsonwebtoken') //jsp 基于token的身份验证

module.exports = {
	createRoom: async (socket, info) => {
		let user = await User.findOne({account: info.account});
		let hasRoom = await Room.findOne({name: info.roomName});
		//用户创建房间数量限制（待处理）
		if (user && !hasRoom) {
			let room = new Room(Object.assign({},
					{name: info.roomName, createTime: Date.now()},
					{createrUser: user._id, users: [user._id], avatar: '', createrUserName: user.nickname}
			))
			user.rooms.push(room._id);
			user.save();
			room.save();
			socket.join(room.name);
			return {
				status: 'success',
				message: '房间创建成功',
				roomInfo: {
					roomName: info.roomName,
					avatar: room.avatar,
					isPrivate: false,
					createTime: room.createTime,
					createrUserName: room.createrUserName
				}
			}
		} else {
			return {
				status: 'fail',
				message: '房间创建失败',
				roomInfo: {}
			}
		}
	},
	getRoomLists: async (token) => {
		let verifyResult = jwt.verify(token, config.JWT_KEY); 
		if (verifyResult) {
			let user = await User.findOne({account: verifyResult.user}).populate('rooms');
			if (user) {
				let userRoomLists = util.getRoomLists(user.rooms);
				let roomNameArr = util.getRoomNameArr(user.rooms);
				let histories = await History.find({roomName: {$in: roomNameArr} }).populate('owner');
				let historiesArr = util.getAllRoomHistorys(histories);
				return {
					userRoomLists:userRoomLists,
					histories: historiesArr
				}
			}
		} else {
			return {
				isError: true,
				message: 'token解析失败'
			}
		}
	}
}