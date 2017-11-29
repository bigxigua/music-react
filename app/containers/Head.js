import { connect } from 'react-redux'
import Head from '../component/Head.jsx'

function mapStateToProps(state) {
	return {
		userAvatar: state.setUserInfo.userAvatar,
		userNickname: state.setUserInfo.userNickname,
		onlineState: state.setUserInfo.onlineState
	}
}

function mapDispatchToProps() {
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Head)