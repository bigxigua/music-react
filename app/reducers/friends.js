
let defaultState = {
	userLists: [],
	// applyLists: []
}

function applyFriends(state, action){
	console.log(action)
	let _userLists = state.userLists.concat([]);
	// let _applyLists = state.applyLists.concat([]);
	_userLists.forEach((item) => {
		if(item.account == action.result.account) {
			item.notify.push(action.result);
		}
	})
	// _applyLists.push(action.result);
	return Object.assign({}, state, {userLists: _userLists})
}

export default function pageState(state = defaultState, action) {
	switch(action.type) {
		case 'SEARCH_USERS': {
			return Object.assign({},state, {userLists: action.userLists})
		}
		case 'APPLY_FRIEND': {
			return applyFriends(state, action)
		}
		default: {
			return state
		}
	}
}