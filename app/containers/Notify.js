import {
	connect
} from 'react-redux';
import Notify from '../component/Notify.jsx';
import {
	setPageState,
	getUserInfo,
	addFriend
} from '../actions/index.js'

function mapStateToProps(state) {
	return {
		currentPage: state.setPageState.pageState,
		userInfo: state.setUserInfo.userInfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setPageState: (params) => {
			dispatch(setPageState(params))
		},
		getUserInfo: (params) => {
			dispatch(getUserInfo(params))
		},
		addFriend: (params) => {
			dispatch(addFriend(params))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Notify)