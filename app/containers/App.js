import { connect } from 'react-redux';
import App from '../App.jsx';

function mapStateToProps(state) {
	return {
		menuState: state.getIn(['pageState', 'isShowMenu'])
	}
}

export default connect(mapStateToProps)(App)