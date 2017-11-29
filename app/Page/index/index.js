import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setPageState, deleteChatItem } from '../../actions/index.js'
import Index from './Index.jsx'


function mapStateToProps(state) {
	return {
		count: state.pageState.count,
		lists: state.setChatLists.lists
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// aaaa: bindActionCreators({setPageState}, dispatch)
		aaaa: (params) => {dispatch(setPageState(params))},
		deleteItem: (index) => {dispatch(deleteChatItem(index))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)