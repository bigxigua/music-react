const connect = require('../controllers/connect.js');
const message = require('../controllers/message.js');

const callbackError = function (cb, err) {
	cb({
		isError: true,
		errMsg: '服务器出错'
	}) 
	console.log(err)
}

module.exports = function (io) {
	io.on('connection', (socket) => {
		console.log('----------connection----------')
		console.log(socket.id)
		socket.on('message', (msg, cb) => {
			message.saveMessage(msg, socket, cb).catch((err) => {
				callbackError(cb, err)
			})
		})
	})
}