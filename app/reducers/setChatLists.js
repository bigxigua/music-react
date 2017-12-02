const list1 = {
	chatType: 0, //0单人聊天，1讨论组，2群
	chatAvatar: '', //头像
	name: '装逼讨论组1',
	roomID: 0,
	lastedTime: '2017/11/25 17:13:00', //最后发言时间
	lastedSpeakerName: '傻吊',
	lastedSpeakeWord: '我是傻吊',
	Index: 0,
	unreadNumber: 0 //未读消息数量
}
const list2 = {
	chatType: 0, //0单人聊天，1讨论组，2群
	chatAvatar: '', //头像
	name: '装逼讨论组2',
	Index: 1,
	roomID: 1,
	lastedTime: '2017/11/25 17:13:00', //最后发言时间
	lastedSpeakerName: '傻吊',
	lastedSpeakeWord: '我是傻吊',
	unreadNumber: 0 //未读消息数量
}
const list3 = {
	chatType: 0, //0单人聊天，1讨论组，2群
	chatAvatar: '', //头像
	name: '装逼讨论组3',
	Index: 2,
	roomID: 2,
	lastedTime: '2017/11/25 17:13:00', //最后发言时间
	lastedSpeakerName: '傻吊',
	lastedSpeakeWord: '我是傻吊',
	unreadNumber: 0 //未读消息数量
}

let defaultState = {
	lists: [list1,list2,list3]
}

const deleteItem = (state,index) => {
	let _lists_ = [].concat(state.lists);
	const _index = _lists_.findIndex((item) => item.Index === index);
	_lists_.splice(_index, 1)
	return Object.assign({},state,{lists: _lists_})
}

export default function setChatLists(state = defaultState, action) {
	switch(action.type) {
		case 'DELETE_ITEM': {
			return deleteItem(state, action.index)
		}  
		default: {
			return state
		}
	}
	
}