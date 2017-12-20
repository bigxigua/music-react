import React, { Component } from 'react';
import classNames from 'classnames';
import '../scss/head.scss';

const MessageIcon = () => {
	return (
			<div className="Header-icon-message">
				<i className="w-icon-message"></i>
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

const DeleteIcon = () => {
	return (
			<div className="Header-icon-delete">
				<i className="w-icon-close"></i>
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
		this.getUserInfo = this.getUserInfo.bind(this);
		this.toggleSettingCard = this.toggleSettingCard.bind(this);
		this.gotoCreateRoom = this.gotoCreateRoom.bind(this);
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
	getUserInfo(){
		return this.props.getUserInfo(localStorage.getItem('account'))
	}
	toggleSettingCard(){
		const { showSettingCard } = this.state;
		this.setState({
			 initAnimate: true
		})
		!this.props.data.isChatList ? (this.setState({
			showSettingCard: !showSettingCard
		})) : {};
	}
	render(){
		this.getUserInfo();
		const {onlineState, avatar} = this.props;
		const { isChatList, title } = this.props.data;
		const {showSettingCard, initAnimate} = this.state;
		const settingCardClassNames = classNames({
			'SettingCard-container animated': true,
			'show-SettingCard': showSettingCard
		})
		const iconList = isChatList ?
											( <div><SearchIcon /><UserSettingIcon /><MoreIcon toggleSettingCard={this.toggleSettingCard} /></div>):
											( <div><MessageIcon /><MoreIcon toggleSettingCard={this.toggleSettingCard} /><DeleteIcon /></div>)
											
		const Element = isChatList ? 
		(<div className="Header-Menu-container" onClick={this.showChatLists}>
				<i className="w-icon-menu"></i>
				<div className="Header-title">{title}</div>
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
												<li onClick={this.gotoCreateRoom}>创建群组</li>
												<li onClick={this.showUserCenter}>用户资料</li>
												<li>设置</li>
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