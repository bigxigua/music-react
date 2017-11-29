import { combineReducers } from 'redux';
import pageState from './pageState.js';
import setUserInfo from './setUserInfo.js';
import setChatLists from './setChatLists.js';

const rootReducer = combineReducers({
	pageState,
	setUserInfo,
	setChatLists
})

export default rootReducer