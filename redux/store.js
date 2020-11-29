import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createWrapper} from 'next-redux-wrapper';
import rootReducer from './reducers/';

const initState = {}

const makeStore = (context) => createStore(rootReducer, initState, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, {debug: true})