import {createStore, applyMiddleware} from 'redux';

import { appReducer } from '../reducers/appReducer';
import thunk from 'redux-thunk'

// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;