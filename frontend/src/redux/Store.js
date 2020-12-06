import {
  createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import {
  challengeDetailsReducer,
  challengeListReducer,
  userReducer,
} from './reducers/challengeReducer';

import { readActiveUser } from './actions/challenge-actions';

const initialState = {};

const reducer = combineReducers({
  challengeList: challengeListReducer,
  challengeDetails: challengeDetailsReducer,
  user: userReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
  );
  readActiveUser()(store.dispatch);
  return store;
}
