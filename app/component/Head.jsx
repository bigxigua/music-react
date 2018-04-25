import React, { Component } from 'react';
import classNames from 'classnames';
import '../scss/head.scss';

const MessageIcon = (props) => {
	const notifies = props.notifies;
	if(!notifies) return null;
	const notifyIcon = notifies.length > 0 ? (<span className="message-number">{notifies.length}</span>) : null;
	return (
			<div className="Header-icon-message" onClick={props.gotoNotifyPage}>
				<i className="w-icon-message"></i>
				{notifyIcon}
			</div> 
		)
}

const MoreIcon = (props) => {
	return (
			<div className="Header-icon-more" onClick={props.toggleSettingCard}>
				<i className="w-icon-more"></i>
			</div>
		)
}

const FriendsListIcon = (props) => {
	return (
			<div className="Header-icon-delete" onClick={props.handle}>
				<i className="w-icon-user"></i>
			</div>
		)
}

const SearchIcon = (props) => {
	return (
			<div className="Header-icon-search">
				<i className="w-icon-search"></i>
			</div>
		)
}

const UserSettingIcon = () => {
	return (
			<div className="Header-icon-user-setting">
				<i className="w-icon-user"></i>
			</div>
		)
} 


export default class Head extends Component {
	constructor(props){
		super(props);
		this.showUserCenter = this.showUserCenter.bind(this);
		this.showChatLists = this.showChatLists.bind(this);
		this.toggleSettingCard = this.toggleSettingCard.bind(this);
		this.gotoCreateRoom = this.gotoCreateRoom.bind(this);
		this.gotoAddfriends = this.gotoAddfriends.bind(this);
		this.gotoFriendsListsPage = this.gotoFriendsListsPage.bind(this);
		this.gotoNotifyPage = this.gotoNotifyPage.bind(this);
		this.state = {
			showSettingCard: false,
			initAnimate: false
		}
	}
	showUserCenter(){
		this.props.setPageState('USERINFO-PAGE');
		this.setState({
			showSettingCard: false
		})
	}
	showChatLists(){
		return this.props.setPageState('MESSAGELIST-PAGE');
	}
	gotoCreateRoom(){
		this.props.setPageState('CREATE-ROOM-PAGE');
		this.setState({
			showSettingCard: false
		})
	}
	gotoAddfriends(){
		this.props.setPageState('ADDFRIENDS-PAGE');
		this.setState({
			showSettingCard: false
		})
	}
	toggleSettingCard(){
		const { showSettingCard } = this.state;
		this.setState({
			 initAnimate: true
		});
		!this.props.data.isChatList ? (this.setState({
			showSettingCard: !showSettingCard
		})) : {};
	}
	gotoFriendsListsPage(){
		this.props.setPageState('FRIENDSLISTS-PAGE');
	}
	gotoNotifyPage(){
		this.props.setPageState('NOTIFY-PAGE');
	}
	render(){
		const {onlineState, avatar, notify} = this.props.userInfo;
		const { isChatList, title } = this.props.data;
		const {showSettingCard, initAnimate} = this.state;
		const settingCardClassNames = classNames({
			'SettingCard-container animated': true,
			'show-SettingCard': showSettingCard
		})
		const iconList = isChatList ?
											( <div><SearchIcon /><UserSettingIcon /><MoreIcon toggleSettingCard={this.toggleSettingCard} /></div>):
											( <div><MessageIcon gotoNotifyPage={this.gotoNotifyPage} notifies={notify} /><MoreIcon toggleSettingCard={this.toggleSettingCard} /><FriendsListIcon handle={this.gotoFriendsListsPage} /></div>)
											
		const Element = isChatList ? 
		(<div className="Header-Menu-container" onClick={this.showChatLists}>
				<i className="w-icon-menu"></i>
				<div className="Header-title">TBZ</div>
		</div>): 
		(<div className="Header-onlineState-container">
				<img src={avatar ? avatar : TBZ.DEFAULT_AVATAR} onClick={this.showUserCenter} />
				<div className="Header-onlineState"></div>
		</div>);
		return (<div className="Head-container">
							<header	className="Head">
									<div>{ Element }</div>
									<div className={settingCardClassNames}>
										<ul>
												<li>设置</li>
												<li onClick={this.gotoAddfriends}>加好友</li>
												<li onClick={this.gotoCreateRoom}>创建群组</li>
												<li onClick={this.showUserCenter}>用户资料</li>
												<li>切换账号</li>
										</ul>
									</div>
									<div className="Header-rightElement">
										{iconList}
									</div>
							</header>
						</div>)
	}
}