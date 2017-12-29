import {
	connect
} from 'react-redux';
import AddFriend from '../component/AddFriend.jsx';
import {
	setPageState,
	createRoomAction,
	searchUsers,
	addFriends
} from '../actions/index.js'

function mapStateToProps(state) {
	return {
		currentPage: state.setPageState.pageState,
		searchResults: state.friends.userLists,
		friendLists: state.friends.friendLists,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setPageState: (params) => {
			dispatch(setPageState(params))
		},
		createRoomAction: (info) => {
			dispatch(createRoomAction(info))
		},
		searchUsers: (nickname) => {
			dispatch(searchUsers(nickname))
		},
		addFriends: (account) => {
			dispatch(addFriends(account))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend)