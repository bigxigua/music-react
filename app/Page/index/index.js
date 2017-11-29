import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setPageState } from '../../actions/index.js'
import Index from './Index.jsx'

function mapStateToProps(state) {
	return {
		count: state.pageState.count
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// aaaa: bindActionCreators({setPageState}, dispatch)
		aaaa: (params) => {dispatch(setPageState(params))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)