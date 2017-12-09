let defaultState = {
	avatar: window.TBZ.DEFAULT_AVATAR,
	nickname: '',
	info: '',
	account: '',
	onlineState: 1, //在线情况 0=>不在线 1=>在线 2=>隐身 3=>忙碌
}

export default function setUserInfo(state = defaultState, action) {
	switch(action.type) {
		case 'SET_USER_CARD_INFO': {
			return Object.assign({},state, action.info)
		}
		default: { 
			return state
		}
	}
}