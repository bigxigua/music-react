import { 
	
} from '../actions/index.js';

let defaultState = {
	roomLists: []
}

let addRoomList = function (state, roomInfo) {
	let _lists = [].concat(state.roomLists);
	_lists.push(roomInfo.roomInfo);
	return Object.assign({}, state, {roomLists: _lists})
}

let getRoomLists = function (state, lists) {
	let _lists = [].concat(lists);
	return Object.assign({}, state, {roomLists: _lists})
}

export default function roomList(state = defaultState, action) {
	switch(action.type) {
		case 'ADD_ROOM_LISTS': {
			return addRoomList(state, action.info)
		}
		case 'GET_ROOM_LISTS': {
			return getRoomLists(state, action.lists)
		}
		default: {
			return state
		}
	}
}