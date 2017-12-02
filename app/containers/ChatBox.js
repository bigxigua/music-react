import { connect } from 'react-redux'
import ChatRoom from '../component/ChatBox.jsx'
import { addMessage } from '../actions/index.js'


function mapStateToProps(state) {
	return {
		chatRoomBackGround: state.setChatRoomInfo.chatRoomBackGround,
		message: state.message.message,
		messageLists: [{
			name: 'dsadsa',
			avatar: TBZ.DEFAULT_AVATAR,
			message: 'fuck you',
			timestamp: new Date().getTime()
		}]
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addMessage: (params) => { dispatch(setPageState(params)) }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatRoom)