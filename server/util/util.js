module.exports = {
	getRoomLists: function(lists) {
		let rooms = [];
		for (let i = 0; i < lists.length; i++) {
			let roomName = lists[i]['name'];
			rooms.push({
				roomName: roomName,
				createTime: lists[i].createTime,
				roomInfo: lists[i].roomInfo,
				avatar: lists[i].avatar,
				createrUserName: lists[i].createrUserName,
				isPrivate: lists[i].isPrivate
			})
		}
		return rooms;
	},
	getAllRoomHistorys: function (lists) {
		let histories = {};
		let historiesArr = [];
		for (let k = 0; k < lists.length; k++) {
			let roomName = lists[k].roomName;
			if(!histories[roomName]) {
				histories[roomName] = [];
			}
			histories[roomName].push(lists[k]);
		}
		for (let key in histories) {
			if(histories.hasOwnProperty(key)) {
				historiesArr.push({
					name: key,
					histories: histories[key]
				})
			}
		}
		return historiesArr;
	},
	getRoomNameArr: function (lists) {
		let roomNameArr = [];
		for (let j = 0; j < lists.length; j++) {
			if(roomNameArr.indexOf(lists[j].name) == -1) {
				roomNameArr.push(lists[j].name)
			}
		}
		return roomNameArr;
	}
}