let defaultState = {
	userInfo: {}
};

export default function setUserInfo(state = defaultState, action) {
	switch (action.type) {
		case 'SET_USER_CARD_INFO':
			{
				return Object.assign({}, state, action.info)
			}
		case 'GET_USER_INFO':
			{
				return Object.assign({}, state, {userInfo: action.info})
			}
		case 'SET_USER_CURROOM':
			{
				return Object.assign({}, state, {
					currentRoomName: action.roomName
				})
			}
		case 'SET_USER_APPLYLISTS':
			{
				return Object.assign({}, state, {
					myApplyLists: action.myApplyLists
				})
			}
    case 'CHECK_LOGIN':
			{
				return Object.assign({}, state, {
					isLogin: action.info
				})
			}
		default:
			{
				return state
			}
	}
}