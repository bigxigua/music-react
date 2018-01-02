import {
	connect
} from 'react-redux';
import AddFriend from '../component/AddFriend.jsx';
import {
	setPageState,
	createRoomAction,
	searchUsers,
	applyFriend
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
		applyFriend: (accounts) => {
			dispatch(applyFriend(accounts))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend)