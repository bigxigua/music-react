import React, { Component } from 'react';
import '../scss/searchbar.scss'

const ListItem = (props) => {
	return (
			<div className="ChatListItem">

			</div>
		)
}

export default class SearchBar extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="SearchBar-container">
				<div className="searchInput">
					<div className="SearchInput-search-button">
						<i className="w-icon-search"></i>
					</div>
					<input type="text" className="searchInput-input" placeholder="搜索或开始新的对话"/>
				</div>
			</div>
		)
	}
}