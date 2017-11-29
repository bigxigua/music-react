import { combineReducers } from 'redux';
import pageState from './pageState.js';

const rootReducer = combineReducers({
	pageState
})
console.log(rootReducer)
export default rootReducer