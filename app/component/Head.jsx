import React, { Component } from 'react';
import '../scss/head.scss'

const HeadPortrait = (props) => {
	const {onlineState, portrait, isChatList, title} = props.data;
	
	return (<div >{Element}</div>)
}

const MessageIcon = () => {
	return (
			<div className="Header-icon-message">
				<i className="w-icon-message"></i>
			</div>
		)
}

const MoreIcon = () => {
	return (
			<div className="Header-icon-more">
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

const SearchIcon = () => {
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
	}
	showUserCenter(){
		return this.props.setPageState('USERINFO-PAGE')
	}
	showChatLists(){
		return this.props.setPageState('MESSAGELIST-PAGE')
	}
	render(){
		const {onlineState, userAvatar} = this.props;
		const { isChatList, title } = this.props.data;
		const iconList = isChatList ?
											( <div><SearchIcon /><UserSettingIcon /><MoreIcon /></div>):
											( <div><MessageIcon /><MoreIcon /><DeleteIcon /></div>)
											
		const Element = isChatList ? 
		(<div className="Header-Menu-container" onClick={this.showChatLists}>
				<i className="w-icon-menu"></i>
				<div className="Header-title">{title}</div>
		</div>): 
		(<div className="Header-onlineState-container">
				<img src={userAvatar} onClick={this.showUserCenter} />
				<div className="Header-onlineState"></div>
		</div>);
		return (<div className="Head-container">
							<header	className="Head">
									<div>{ Element }</div>
									<div className="Header-rightElement">
										{iconList}
									</div>
							</header>
						</div>)
	}
}