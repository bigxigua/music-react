import { connect } from 'react-redux'
import ChatItem from '../component/ChatItem.jsx'



function mapStateToProps(state) {
	return {
		// lists: state.setChatLists.lists
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// deleteItem: (index) => {dispatch(deleteChatItem(index))}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatItem)