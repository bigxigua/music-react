import { connect } from 'react-redux'
import Head from '../component/Head.jsx'

function mapStateToProps(state) {
	return {
		avatar: state.setUserInfo.avatar,
		nickname: state.setUserInfo.nickname,
		onlineState: state.setUserInfo.onlineState
	}
}

function mapDispatchToProps() {
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Head)