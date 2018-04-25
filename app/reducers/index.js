import { combineReducers } from 'redux';
import setPageState from './setPageState.js';
import setUserInfo from './setUserInfo.js';
import setChatLists from './setChatLists.js';
import setChatRoomInfo from './setChatRoomInfo.js';
import roomList from './roomList.js';
import message from './message.js';
import friends from './friends.js';

const rootReducer = combineReducers({
	setPageState,
	setUserInfo,
	setChatLists,
	setChatRoomInfo,
	message,
	roomList,
	friends
});

export default rootReducer