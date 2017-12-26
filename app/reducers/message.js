import { 
	
} from '../actions/index.js';

let defaultState = {
	messageLists: []
}

function addMessage(state,message) {
	let isEmptyHistories = true;
	const _messageLists = [].concat(state.messageLists);
	for (let i = 0, len = _messageLists.length; i < len; i++) {
		let item = _messageLists[i];
		item.name == message.roomName 
		          ? (item.histories.push(message),isEmptyHistories = false) : {}
	}
	if(isEmptyHistories) {
		_messageLists.push({
			name: message.roomName,
			histories: [message]
		})
	}
	return Object.assign({}, state, {messageLists: _messageLists})
}

function getHistoryMessages(state,histories) {
	return Object.assign({}, state, {messageLists: histories})
}

export default function message(state = defaultState, action) {
	switch(action.type) {
		case 'ADD_MESSAGE': {
			return addMessage(state, action.message)
		}
		case 'GET_HISTORY_MESSAGE': {
			return getHistoryMessages(state, action.histories)
		}
		default: {
			return state
		}
	}
}