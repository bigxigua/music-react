import { 
	
} from '../actions/index.js';

let defaultState = {
	message: ''
}

export default function message(state = defaultState, action) {
	console.log(action)
	switch(action.type) {
		case 'ADD_MESSAGE': {
			return {}
		}
		default: {
			return state
		}
	}
}