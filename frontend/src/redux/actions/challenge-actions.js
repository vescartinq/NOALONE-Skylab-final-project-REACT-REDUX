/* eslint-disable no-debugger */
import Axios from 'axios';
import actionTypes from './actionTypes';

import { auth, firebase } from '../../Firebase/firebase';

const serverChallengesUrl = 'http://localhost:3000/challenges';

export const listChallenges = () => async (dispatch) => {
  dispatch({
    type: actionTypes.CHALLENGE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/challenges');
    dispatch({ type: actionTypes.CHALLENGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.CHALLENGE_LIST_FAIL, payload: error.message });
  }
};

export const detailsChallenge = (challengeId) => async (dispatch) => {
  dispatch({ type: actionTypes.CHALLENGE_DETAILS_REQUEST, payload: challengeId });
  try {
    const { data } = await Axios.get(`/challenges/${challengeId}`);
    dispatch({ type: actionTypes.CHALLENGE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.CHALLENGE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userRegister = () => async (dispatch) => {
  dispatch({ type: actionTypes.USERS_REGISTER_REQUEST });
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const data = await auth.signInWithPopup(provider);
    // eslint-disable-next-line no-console
    console.log(data);

    localStorage.setItem('user', JSON.stringify({
      uid: data.user.uid,
      email: data.user.email,
      displayName: data.user.displayName,
    }));
    dispatch({
      type: actionTypes.USERS_REGISTER_SUCCESS,
      payload: {
        uid: data.user.uid,
        email: data.user.email,
        displayName: data.user.displayName,
      },
    });
  } catch (error) {
    dispatch({ type: actionTypes.USERS_REGISTER_FAIL, payload: error.message });
  }
};

export const readActiveUser = () => (dispatch) => {
  if (localStorage.getItem('user')) {
    dispatch({
      type: actionTypes.USERS_REGISTER_SUCCESS,
      payload: JSON.parse(localStorage.getItem('user')),
    });
  }
};

export const signOutUser = () => (dispatch) => {
  auth.signOut();
  localStorage.removeItem('user');
  dispatch({
    type: actionTypes.SIGN_OUT_SUCCESS,
  });
};

export const createChallenge = (newChallenge) => async (dispatch) => {
  dispatch({ type: actionTypes.CHALLENGE_CREATE_REQUEST });
  try {
    const { data } = await Axios.post(serverChallengesUrl, newChallenge);
    dispatch({
      type: actionTypes.CHALLENGE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: actionTypes.CHALLENGE_CREATE_FAIL, payload: error.message });
  }
};

export const deleteChallenge = (challenge) => async (dispatch) => {
  debugger;
  dispatch({ type: actionTypes.CHALLENGE_DELETE_REQUEST });
  try {
    const { data: { _id } } = await Axios.delete(serverChallengesUrl, { data: challenge });
    dispatch({
      type: actionTypes.CHALLENGE_DELETE_SUCCESS,
      payload: _id,
    });
  } catch (error) {
    dispatch({ type: actionTypes.CHALLENGE_DELETE_FAIL, payload: error.message });
  }
};
