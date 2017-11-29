import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore.js';
import injectTapEventPlugin from 'react-tap-event-plugin' //快速点击

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' //material-ui库
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// import ReactCSSTransitionGroup from 'react-transition-group/CSSTransition.js' // 动画插件
import Index from './Page/index/index.js';
import './App.scss'
import 'amfe-flexible'
import './global.js' 
import '../node_modules/uiw-iconfont/fonts/w-iconfont.css'

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div className='container'>
					<Index />
				</div>
			</MuiThemeProvider>
		)
	}
}

injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
		<div>
				<App />
		</div>
	</Provider>,
	document.getElementById('root')
)