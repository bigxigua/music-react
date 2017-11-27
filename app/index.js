import React from 'react'
import ReactDom from 'react-dom';
import App from './App.jsx';

import 'amfe-flexible'
import './global.js'
import '../node_modules/uiw-iconfont/fonts/w-iconfont.css'

import { Provider } from 'react-redux';
import store from './store/configureStore.js';

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));