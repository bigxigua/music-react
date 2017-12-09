const connect = require('../controllers/connect.js');
const message = require('../controllers/message.js');
const user = require('../controllers/user.js');
const room = require('../controllers/room.js');

const callbackError = function (cb, err) {
	cb({
		isError: true,
		errMsg: '服务器出错'
	})
}

const callbackSuccess = function (cb, info) {
	cb(info)
}

module.exports = function (io) {
	io.on('connection', (socket) => {
		socket.on('message', (msg, cb) => {
			message.saveMessage(msg, socket, cb).catch((err) => {
				callbackError(cb, err)
			})
		});
		socket.on('getUserInfo', (account, cb) => {
			user.getUserInfo(account).then((info) => {
				callbackSuccess(cb, info)
			}).catch((err) => {
				callbackError(cb, err)
			})
		});
		socket.on('createRoom', (roomInfo, cb) => {
			room.createRoom(socket, roomInfo).then((info) => {
				callbackSuccess(cb, info)
			}).catch((err) => {
				callbackError(cb, err)
			})
		});
	})
}