import Immutable from 'immutable';

// import { 
// 	OPEN_USERINFO_PAGE_STATE, //打开个人中心
// 	OPEN_MESSAGELIST_PAGE_STATE, // 打开聊天列表页面
// 	OPEN_CHATROOM_PAGE_STATE //打开聊天页面
// } from '../actions/index.js';

let defaultState = {
	count: 2
}

// defaultState = Immutable.fromJS(defaultState);

export default function pageState(state = defaultState, action) {
	switch(action.type) {
		case 'OPEN_USERINFO_PAGE_STATE': {
			return {count: state.count + action.count}
		}  
		default: {
			return state
		}
	}
}