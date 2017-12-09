import io from 'socket.io-client'

export const socket = io('http://localhost:3003', {
	'force new connection': true
});

export const OPEN_USERINFO_PAGE_STATE = 'OPEN_USERINFO_PAGE_STATE';
export const OPEN_MESSAGELIST_PAGE_STATE = 'OPEN_MESSAGELIST_PAGE_STATE';
export const OPEN_CHATROOM_PAGE_STATE = 'OPEN_CHATROOM_PAGE_STATE';

//显示个人中心页面
export const setPageState = (page) => {
	return {
		type: 'SET_PAGE_STATE',
		page
	}
}

//删除一条聊天记录
export const deleteChatItem = (index) => {
	return {
		type: 'DELETE_ITEM',
		index
	}
}

//往当前房间消息队列里添加消息
export const addMessage = (message) => {
	return {
		type: 'ADD_MESSAGE',
		message //对象 必要roomID/content/type/nickname
	}
}

//发送消息
export const sendMessage = (message) => {
	return new Promise((resolve, reject) => {
		socket.emit('message', message, (body) => {
			body.isError ? (reject(body)) : (resolve(body))
		})
	})
}

//填充登陆用户信息
export const setUserCardInfo = (info) => {
	return {
		type: 'SET_USER_CARD_INFO',
		info //登陆的用户信息
	}
}

//获取登陆用户信息
export const getUserInfo = (account) => {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			socket.emit('getUserInfo', account, (body) => {
				if(!body.isError){
					dispatch(setUserCardInfo(body))
				}
				body.isError ? (reject(body)) : (resolve(body))
			})
		})
	}
}