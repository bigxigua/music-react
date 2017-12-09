import { connect } from 'react-redux'
import createRoom from '../component/createRoom.jsx'
import { addMessage } from '../actions/index.js'


function mapStateToProps(state) {
	return {
		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// addMessage: (params) => { dispatch(addMessage(params)) }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(createRoom)