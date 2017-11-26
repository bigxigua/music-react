import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import reducer from '../reducers';

const finalCreatStore = applyMiddleware(thunk)(createStore);
const store = finalCreatStore(reducer);

export default store


