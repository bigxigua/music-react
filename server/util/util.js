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
				createrUserName: lists[i].createrUserName
			})
		}
		return rooms;
	}
}