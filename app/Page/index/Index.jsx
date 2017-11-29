import React, { Component } from 'react'
import Head from '../../containers/Head.js'
import SearchBar from '../../containers/SearchBar.js'
import ChatItem from '../../containers/ChatItem.js'

export default class Index extends Component {
	constructor(props){
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
	}

	componentDidMount(){
		// console.log(this.props)
	}
	deleteItem(index){
		this.props.deleteItem(index);
	}
	render(){
		const MessageListData = {isChatList: true};

		console.log(this.props.lists)
		const ListItems = this.props.lists.map((item, index) =>{
				return (<ChatItem data={item} key={item.Index} index={item.Index} deleteItem={this.deleteItem}></ChatItem>)
		})
		// onClick={ () => {this.props.aaaa(11)} }
		return (<div className="MessageList-container">
							<Head data={MessageListData}></Head>
							<div className="ActiveList-container">
								<SearchBar></SearchBar>
								{ ListItems }
							</div>
						</div>)
	}
}