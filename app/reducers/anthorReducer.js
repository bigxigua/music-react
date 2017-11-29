import Immutable from 'immutable';


let defaultState = {
	aa: 1
}

// defaultState = Immutable.fromJS(defaultState);

export default function pageState(state = defaultState, action) {
	console.log(action.count)
	const count = action.count;
	switch(action.type) {
		case 'OPEN_USERINFO_PAGE_STATE': {
			return {count: state.count - 1}
		}  
		default: {
			return state
		}
	}
	console.log(action,'----')
}