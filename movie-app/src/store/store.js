import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import MovieReducer from '../reducer/reducer';

//This line allows is the use the redux dev tools to check on actions happening
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    MovieReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;