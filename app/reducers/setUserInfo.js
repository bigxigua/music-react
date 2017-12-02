let defaultState = {
	userAvatar: window.TBZ.DEFAULT_AVATAR,
	userNickname: '游客' + Math.random().toString(36).substring(3,7),
	onlineState: 1, //在线情况 0=>不在线 1=>在线 2=>隐身 3=>忙碌
}

export default function setUserInfo(state = defaultState, action) {
	switch(action.type) { 
		default: { 
			return state
		}
	}
}