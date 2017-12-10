import { connect } from 'react-redux'
import createRoom from '../component/createRoom.jsx'
import { setPageState, createRoomAction } from '../actions/index.js'


function mapStateToProps(state) {
	return {
		currentPage: state.setPageState.pageState
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setPageState: (params) => {dispatch(setPageState(params))},
		createRoomAction: (info) => {dispatch(createRoomAction(info))}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(createRoom)