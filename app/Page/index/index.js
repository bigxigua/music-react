import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Index from './Index.jsx'

import { 
	deleteChatItem,
	setPageState,
	getUserInfo
} from '../../actions/index.js'

function mapStateToProps(state) {
	return {
		currentPage: state.setPageState.pageState,
		lists: state.setChatLists.lists
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// aaaa: bindActionCreators({setPageState}, dispatch)
		deleteItem: (index) => {dispatch(deleteChatItem(index))},
		setPageState: (params) => {dispatch(setPageState(params))},
		getUserInfo: (account) => {dispatch(getUserInfo(account))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)