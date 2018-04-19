import { connect } from 'react-redux'
import Login from './login.jsx'

import { 
	
} from '../../actions/index.js'



function mapStateToProps(state) {
	return {
		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setPageState: (params) => {dispatch(setPageState(params))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
