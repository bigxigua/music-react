import { 
	
} from '../actions/index.js';

let defaultState = {
	messageLists: [{
		nickname: 'dsadsa',
		avatar: TBZ.DEFAULT_AVATAR,
		content: 'fuck you',
		time: new Date().getTime(),
		roomID: 1
	}]
}

function addMessage(state,message) {
	const _messageLists = [].concat(state.messageLists);
	_messageLists.push(message);
	return Object.assign({}, state, {messageLists: _messageLists})
}

export default function message(state = defaultState, action) {
	switch(action.type) {
		case 'ADD_MESSAGE': {
			return addMessage(state, action.message)
		}
		default: {
			return state
		}
	}
}