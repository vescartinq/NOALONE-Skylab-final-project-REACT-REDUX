import {
  createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import {
  challengeDetailsReducer,
  challengeListReducer,
} from './reducers/challengeReducer';

const initialState = {};

const reducer = combineReducers({
  challengeList: challengeListReducer,
  challengeDetails: challengeDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
