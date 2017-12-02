import { combineReducers } from 'redux';
import setPageState from './setPageState.js';
import setUserInfo from './setUserInfo.js';
import setChatLists from './setChatLists.js';
import setChatRoomInfo from './setChatRoomInfo.js';
import message from './message.js';

const rootReducer = combineReducers({
	setPageState,
	setUserInfo,
	setChatLists,
	setChatRoomInfo,
	message
})

export default rootReducer