
let defaultState = {
	pageState: ''
}

export default function pageState(state = defaultState, action) {
	switch(action.type) {
		case 'SET_PAGE_STATE': {
			return Object.assign({},state, {pageState: action.page})
		}
		default: {
			return state
		}
	}
}