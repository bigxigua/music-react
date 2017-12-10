import { connect } from 'react-redux'
import ChatItem from '../component/ChatItem.jsx'
import { setUserCurRoom } from '../actions/index.js'


function mapStateToProps(state) {
	return {
		// lists: state.setChatLists.lists
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setUserCurRoom: (roomName) => {dispatch(setUserCurRoom(roomName))}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatItem)