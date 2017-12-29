
let defaultState = {
	userLists: [],
	friendLists: []
}

function addFriends(state, action){
	let _userLists = state.userLists.concat([]);
	let _friendLists = state.friendLists.concat([]);
	_userLists.forEach((item) => {
		if(item.account == action.result.account) {
			item.friends.push(action.result);
		}
	})
	_friendLists.push(action.result);
	return Object.assign({}, state, {userLists: _userLists, friendLists: _friendLists})
}

export default function pageState(state = defaultState, action) {
	switch(action.type) {
		case 'SEARCH_USERS': {
			return Object.assign({},state, {userLists: action.userLists})
		}
		case 'ADD_FRIENDS': {
			return addFriends(state, action)
		}
		default: {
			return state
		}
	}
}