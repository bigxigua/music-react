import {
	connect
} from 'react-redux';
import Friends from '../component/Friends.jsx';
import {
	setPageState,
	setUserCurRoom,
	createRoomAction
} from '../actions/index.js'

function mapStateToProps(state) {
	return {
		currentPage: state.setPageState.pageState,
		userInfo: state.setUserInfo.userInfo,
		roomLists: state.roomList.roomLists
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setPageState: (params) => {
			dispatch(setPageState(params))
		},
		setUserCurRoom: (roomName) => {
			dispatch(setUserCurRoom(roomName))
		},
		createRoomAction: (info) => {dispatch(createRoomAction(info))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)