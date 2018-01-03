import {
	connect
} from 'react-redux';
import AddFriend from '../component/AddFriend.jsx';
import {
	setPageState,
	createRoomAction,
	searchUsers,
	updateApplyLists,
	applyFriend,
	getUserInfo
} from '../actions/index.js'

function mapStateToProps(state) {
	return {
		currentPage: state.setPageState.pageState,
		searchResults: state.friends.searchResults,
		myApplyLists: state.setUserInfo.userInfo.myApplyLists
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
		},
		updateUserInfo: (account) => {
			dispatch(getUserInfo(account))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend)