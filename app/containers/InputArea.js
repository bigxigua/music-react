import { connect } from 'react-redux'
import InputArea from '../component/InputArea.jsx'

function mapStateToProps(state) {
	return {
		userNickname: state.setUserInfo.userNickname,
		userAvatar: state.setUserInfo.userAvatar,
	}
}

function mapDispatchToProps() {
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(InputArea)