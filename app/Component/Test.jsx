import React, { Component } from 'react';
import Hammer from 'hammerjs';


export default class Test extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: 'fuck'
		}
	}
	getCss(ele, styleName){
		return ele.currentStyle ? ele.currentStyle[styleName] 
		       : document.default.getComputedStyle(ele, false)[styleName]
	}
	dragHandle(element){
		const hammer = new Hammer(element);
		let [x, y] = [0, 0];
		hammer.on('panstart', (e) => {
			x = parseInt(element.style.left);
			y = parseInt(element.style.top);
		});
		hammer.on('panmove', (e) => {
			element.style.left = x + e.deltaX + 'px';
			element.style.top = y + e.deltaY + 'px';
		})
		hammer.on('panend', (e) => {
			console.log('---end---')
		})
	}
	componentDidMount(){
		this.dragHandle(this.refs.oDiv);
	
	}
	render(){
		const dragStyle = {
			width: '40px',
			height: '40px',
			backgroundColor: 'red',
			position: 'absolute',
			left: 0,
			top: 0,
			transform: 'translate3d(0,0,0)',
			transition: 'all linear 0.4s'
		}
		const boxStyle = {
			width: '200px',
			height: '200px',
			borderColor: 'red',
			borderWidth: '1px',
			borderStyle: 'solid',
			margin: 'auto'
		}
		return (<div>
							{/*<input ref={(element) => { this.DomElemet = element; }}></input>
							<button onClick={this.focus}>点击</button>*/}
							<div style={dragStyle} ref="oDiv" dragable="true"></div>
							<div style={boxStyle}></div>
						</div>)
	}
}