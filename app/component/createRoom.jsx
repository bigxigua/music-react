import React, { Component } from 'react';
import '../scss/createroom.scss'

export default class createRoom extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		
	}
	render(){
		return (<div className="createRoom-content">
							<div className="createRoom-head">
								<div>
									<i className="w-icon-arrow-left"></i>
									<p>创建群组</p>
								</div>
							</div>
							<div className="createRoom-add">
								<div	className="createRoom-circle">
										<div className="createRoom-line-heng"></div>
										<div className="createRoom-line-zong"></div>
								</div>
							</div>
						</div>)
	}
}