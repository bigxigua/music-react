import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setPageState, deleteChatItem } from '../actions/index.js'
import UserCenter from '../component//UserCenter.jsx'


function mapStateToProps(state) {
	return {
		avatar: state.setUserInfo.avatar,
		nickname: state.setUserInfo.nickname,
		account: state.setUserInfo.account,
		info: state.setUserInfo.info,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter)