import { combineReducers } from 'redux-immutable';
import pageState from './pageState.js';

const rootReducer = combineReducers({
	pageState
})

export default rootReducer