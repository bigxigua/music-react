import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setPageState, deleteChatItem } from '../actions/index.js'
import UserCenter from '../component//UserCenter.jsx'


function mapStateToProps(state) {
	return {
		userInfo: state.setUserInfo.userInfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter)