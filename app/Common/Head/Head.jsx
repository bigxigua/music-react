import React, { Component } from 'react';
import './Head.scss'

const HeadPortrait = (props) => {
	const {onlineState, portrait, isChatList, title} = props.data;
	const Element = isChatList ? (<div className="Header-onlineState-container">
																		<img src={portrait || TBZ.DEFAULT_AVATAR} alt="用户头像" />
																		<div className="Header-onlineState"></div>
																</div>) 
						 								 : (<div className="Header-Menu-container">
																		<i className="w-icon-menu"></i>
																		<div className="Header-title">{title}</div>
																</div>)
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
	}
	render(){
		const {isChatList, title} = this.props.data;
		const iconList = isChatList ?
											( <div><MessageIcon /><MoreIcon /><DeleteIcon /></div>) :
											( <div><SearchIcon /><UserSettingIcon /><MoreIcon /></div>)

		return (<div className="Head-container">
							<header	className="Head">
									<HeadPortrait data={this.props.data}  />
									<div className="Header-rightElement">
										{iconList}
									</div>
							</header>
						</div>)
	}
}