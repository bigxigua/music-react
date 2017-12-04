import { connect } from 'react-redux'
import ChatRoom from '../component/ChatBox.jsx'
import { addMessage } from '../actions/index.js'


function mapStateToProps(state) {
	return {
		chatRoomBackGround: state.setChatRoomInfo.chatRoomBackGround,
		messageLists: state.message.messageLists
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addMessage: (params) => { dispatch(addMessage(params)) }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatRoom)