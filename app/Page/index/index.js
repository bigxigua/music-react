import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Index from './Index.jsx'

import { 
	deleteChatItem,
	setPageState,
	getUserInfo,
	getRoomLists
} from '../../actions/index.js'

function mapStateToProps(state) {
	return {
		currentPage: state.setPageState.pageState,
		lists: state.roomList.roomLists,
		histories: state.message.messageLists
	}
}

function mapDispatchToProps(dispatch) {
	return {
		deleteItem: (index) => {dispatch(deleteChatItem(index))},
		setPageState: (params) => {dispatch(setPageState(params))},
		getUserInfo: (account) => {dispatch(getUserInfo(account))},
		getRoomLists: (token) => {dispatch(getRoomLists(token))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)