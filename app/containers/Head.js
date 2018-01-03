import { connect } from 'react-redux'
import Head from '../component/Head.jsx'

function mapStateToProps(state) {
	return {
		userInfo: state.setUserInfo.userInfo
	}
}

function mapDispatchToProps() {
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Head)