import React, { Component } from 'react'
import Head from '../../containers/Head.js'
import SearchBar from '../../containers/SearchBar.js'
import ChatItem from '../../containers/ChatItem.js'
import UserCenter from '../../containers/UserCenter.js'
import InputArea from '../../containers/InputArea.js';
import ChatBox from '../../containers/ChatBox.js';
import CreateRoom from '../../containers/createRoom.js';

import '../../scss/index.scss'
import classNames from 'classnames'

export default class Index extends Component {
	constructor(props){
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
		this.setPageState = this.setPageState.bind(this);
		this.getUserInfo = this.getUserInfo.bind(this);
	}

	componentDidMount(){
		// console.log(this.props)
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
	render(){
		const { currentPage } = this.props;
		const MessageListData = {isChatList: currentPage === 'CHATROOM-PAGE'};
		const ListItems = this.props.lists.map((item, index) =>{
				return (<ChatItem 
					data={item} 
					key={item.Index} 
					index={item.Index} 
					deleteItem={this.deleteItem} 
					setPageState={this.setPageState} >
					</ChatItem>)
		})
		const ChatListClassNames = classNames({
			'page-container animated': true,
			'bounceOutLeft': currentPage === 'CHATROOM-PAGE',
			'bounceInLeft': currentPage === 'MESSAGELIST-PAGE',
		})
		const UserCenterClassNames = classNames({
			'page-container-center animated': true,
			'bounceInLeft': currentPage === 'USERINFO-PAGE',
			'bounceOutLeft': currentPage === 'USERINFO-HIDE-PAGE',
			'page-container-hide': currentPage !== 'USERINFO-HIDE-PAGE',
		})
		const ChatBoxClassNames = classNames({
			'page-container-chat animated': true
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
				<div className='createRoom-container'>
							<CreateRoom />
					</div>
			</div>
	)
	}
}