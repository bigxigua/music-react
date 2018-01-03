const User = require('../models/user-mongo.js');
const History = require('../models/history-mongo.js');
const Room = require('../models/room-mongo.js');

const callbackError = function (cb, msg) {
	cb({
		isError: true,
		message: msg
	})
}

module.exports = {
	saveMessage: async(message, socket, SocketsMap, cb) => {
		console.log(message)
		//1.判断发消息的用户是否存在
		//2.保存消息到聊天记录表
		//3.emit socket 到client
		let chatHistory = {
			roomName: message.roomName,
			content: message.content.slice(0,200),
			type: message.type,
			timestamp: Date.now() 
		}
		let user = await User.findOneUser({ account: message.account });
		if(user) {
			chatHistory.owner = user._id;
			let newHistory = new History(chatHistory);
			let room = await Room.findOne({ name: message.roomName });
			if(room) {
				room.histories.push(newHistory._id);
				await newHistory.save();
				await room.save();
				message.timestamp = Date.now();
				message.nickname = user.nickname;
				message.owner = user;
				if(message.isPrivate) {
					console.log('正在和' + message.roomName + '私聊');
					SocketsMap[message.roomNam] ? (SocketsMap[message.roomNam].emit('newMessage', message)) : {};
				} else {
					socket.broadcast.to(message.roomName).emit('newMessage', message);
				}
				message.isSelf = true;
				socket.emit('newMessage', message);
				console.log('----------------------成功存储消息')
			} else {
				callbackError(cb, '房间不存在');
				console.log('message.js ---- 房间不存在')
			}
		} else {
			callbackError(cb, '用户不存在')
			console.log('message.js ---- 玩家不存在')
		}
	}
}