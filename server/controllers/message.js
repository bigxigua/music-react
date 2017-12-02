

module.exports = {
	saveMessage: async(message, socket, cb) => {
		//1.判断发消息的用户是否存在
		//2.保存消息到聊天记录表
		//3.emit socket 到client
		console.log('--saveMessage---')
		socket.emit('newMessage', message)
	}
}