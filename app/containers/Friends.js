import {
	connect
} from 'react-redux';
import Friends from '../component/Friends.jsx';
import { setPageState } from '../actions/index.js'

function mapStateToProps(state) {
	return {
		currentPage: state.setPageState.pageState
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setPageState: (params) => {dispatch(setPageState(params))}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Friends)