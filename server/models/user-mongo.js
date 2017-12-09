const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
	nickname: String,
	password: String,
	account: Number,
	avatar: String,
	sex: String,
	info: String,
	onlineState: Number,
	rooms: [{
		type: Schema.Types.ObjectId, //房间号以room._id表示
		ref: 'room'

	}]
})

user.statics.findOneUser = function (option = {}) {
	return new Promise((resolve, reject) => {
		this.find(option, (err, data) => {
			if(err) reject(err);
			resolve(data[0]);
		})
	})
}

user.statics.findOneAll = function (option = {}) {
	return new Promise((resolve, reject) => {
		this.find(option, (err, data) => {
			if(err) reject(err);
			resolve(data);
		})
	})
}

user.statics.createUser = function (user) {
    return new Promise((resolve,reject) => {
        this.create(user, (err,result) => {
            if(err) reject(err);
            resolve(result);
        })
    })
}

module.exports = mongoose.model('user',user);