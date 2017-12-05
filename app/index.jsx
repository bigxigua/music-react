import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import { Provider } from 'react-redux'
import './global/global.js' 
import store from './store/configureStore.js';
import injectTapEventPlugin from 'react-tap-event-plugin' //快速点击

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' //material-ui库
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// import ReactCSSTransitionGroup from 'react-transition-group/CSSTransition.js' // 动画插件

import './scss/main.scss'
import 'amfe-flexible'
import '../node_modules/animate.css/animate.min.css'
import '../node_modules/uiw-iconfont/fonts/w-iconfont.css'


import Index from './Page/index/index.js';
import Login from './Page/login/login.js';
import Register from './Page/register/Register.js'

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
					<Router>
						<div className='container'>
							<Route path="/index" component={Index} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
						</div>		
					</Router>
				
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