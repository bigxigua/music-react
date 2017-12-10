const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//room schema 关联 user schema
const room = new Schema({
	name: {
		type: String,
		required: true
	}, //房间名
	isPrivate: Boolean, //私聊
	histories: [{
		type: Schema.Types.ObjectId,
		ref: 'history'
	}],
	avatar: String, //房间头像
	users: [{
		type: Schema.Types.ObjectId,
		ref: 'user'
	}], //房间内所有用户
	createrUser: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	}, //房主
	createrUserName: String,
	lastMessage: String, //最后的消息
	roomInfo: {
		type: String,
		default: '群主什么都没说'
	}, //房间公告信息
	createTime: {
		type: Date,
		default: Date.now()
	} //房间创建时间
});

room.statics.findAll = function(opt = {}) {
	return new Promise((resolve, reject) => {
		this.find(opt).populate('owner').exec(function(err, data) {
			if (err) reject(err);
			resolve(data);
		})
	});
}

module.exports = mongoose.model('room', room);