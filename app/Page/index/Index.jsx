import React, { Component } from 'react'
import Head from '../../containers/Head.js'
import SearchBar from '../../containers/SearchBar.js'
import ChatItem from '../../containers/ChatItem.js'
import UserCenter from '../../containers/UserCenter.js'
import InputArea from '../../containers/InputArea.js';
import ChatBox from '../../containers/ChatBox.js';
import CreateRoom from '../../containers/createRoom.js';
import AddFriends from '../../containers/AddFriend.js';
import Friends from '../../containers/Friends.js';

import '../../scss/index.scss'
import classNames from 'classnames'

export default class Index extends Component {
	constructor(props){
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
		this.setPageState = this.setPageState.bind(this);
		this.getUserInfo = this.getUserInfo.bind(this);
		this.getRoomLists = this.getRoomLists.bind(this);
		this.getLatestMessage = this.getLatestMessage.bind(this);
		this.getRoomLists();
	}

	componentDidMount(){
		// console.log(this.props.histories)
	}
	deleteItem(index){
		this.props.deleteItem(index);
	}
	setPageState(state){
		this.props.setPageState(state)
	}
	getUserInfo(account){
		this.props.getUserInfo(account)
	}
	getRoomLists(){
		this.props.getRoomLists(localStorage.getItem('token'))
	}
	getLatestMessage(roomName){
		let histories = this.props.histories;
		let roomHistories = [];
		if(Array.isArray(histories)) {
			histories.map((item) => {
				if(roomName === item.name){
					roomHistories = item.histories
				}
			})
		}
		return TBZ.sortDown(roomHistories, 'timestamp')[0];
	}
	render(){
		const { currentPage } = this.props;
		const MessageListData = {isChatList: currentPage === 'CHATROOM-PAGE'};
		const ListItems = this.props.lists.map((item, index) =>{
				item.latestMessage = this.getLatestMessage(item.roomName);
				return (<ChatItem 
					data={item}
					latestMessage={item.latestMessage}
					key={new Date(item.createTime).getTime()}
					deleteItem={this.deleteItem} 
					setPageState={this.setPageState} >
					</ChatItem>)
		})
		const ChatListClassNames = classNames({
			'page-container animated': true
		})
		const UserCenterClassNames = classNames({
			'page-container-center animated': true,
			'page-container-show': currentPage === 'USERINFO-PAGE'
		})
		const CreateRoomClassNames = classNames({
			'createRoom-container': true,
			'createRoom-container-show': currentPage == 'CREATE-ROOM-PAGE'
		})
		const ChatBoxClassNames = classNames({
			'page-container-chat animated': true,
			'page-container-show': currentPage == 'CHATROOM-PAGE'
		})
		const AddFriendsClassNames = classNames({
			'page-container-chat animated': true,
			'page-container-show': currentPage == 'ADDFRIENDS-PAGE'

		})
		return (
			<div className="MessageList-container">
					{/*聊天列表*/}
					<div className={ChatListClassNames}>
							<Head data={MessageListData} setPageState={this.setPageState} getUserInfo={this.getUserInfo}></Head>
							<div className="ActiveList-container">
								<SearchBar></SearchBar>
								{ ListItems }
							</div>
					</div>
					{/*个人中心*/}
					<div className={UserCenterClassNames}>
							<UserCenter setPageState={this.setPageState} />
					</div>
					{/*聊天界面*/}
					<div className={ChatBoxClassNames}>
							<Head data={MessageListData} setPageState={this.setPageState} getUserInfo={this.getUserInfo}></Head>
							<div className="ChatBox">
									<ChatBox />
							</div>
							<InputArea />
					</div>
				{/*创建群组界面*/}
				<div className={CreateRoomClassNames}>
							<CreateRoom />
				</div>
				{/*加好友界面*/}
				<div className={AddFriendsClassNames}>
							<AddFriends />
				</div>
				{/*好友列表界面*/}
				{/*<Friends className="friends" />*/}
			</div>
	)
	}
}