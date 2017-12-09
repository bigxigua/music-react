const Room = require('../models/room-mongo.js');
const User = require('../models/user-mongo.js');
const bluebird = require('bluebird');
const bcrypt = require('bcrypt');
const config = require('../config/init.js');
const jwt = require('jsonwebtoken') //jsp 基于token的身份验证

module.exports = {
	createRoom: async (socket, info) => {
		let user = await User.findOne({account: info.account});
		let hasRoom = await Room.findOne({name: info.roomName});
		//用户创建房间数量限制（待处理）
		if (user && !hasRoom) {
			let room = new Room(Object.assign({},{
					{name: info.roomName}
					{createrUser: user._id, users: [users._id]},
					{avatar: ''}
			}))
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
					isPrivate: false
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
}