
let defaultState = {
	searchResults: []
}

function applyFriends(state, action){
	let _userLists = state.searchResults.concat([]);
	_userLists.forEach((item) => {
		if(item.account == action.result.account) {
			item.myApplyLists = action.result.myApplyLists;
		}
	})
	return Object.assign({}, state, {searchResults: _userLists})
} 

export default function pageState(state = defaultState, action) {
	switch(action.type) {
		case 'SEARCH_USERS': {
			return Object.assign({},state, {searchResults: action.userLists})
		}
		case 'APPLY_FRIEND': {
			return applyFriends(state, action)
		}
		default: {
			return state
		}
	}
}