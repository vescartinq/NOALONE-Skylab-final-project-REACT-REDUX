import Axios from 'axios';
import {
  CHALLENGE_LIST_REQUEST,
  CHALLENGE_LIST_SUCCESS,
  CHALLENGE_LIST_FAIL,
  CHALLENGE_DETAILS_REQUEST,
  CHALLENGE_DETAILS_SUCCESS,
  CHALLENGE_DETAILS_FAIL,
  USERS_REGISTER_REQUEST,
  USERS_REGISTER_FAIL,
  USERS_REGISTER_SUCCESS,
} from './actionTypes';

import { auth, firebase } from '../../Firebase/firebase';

export const listChallenges = () => async (dispatch) => {
  dispatch({
    type: CHALLENGE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/challenges');
    dispatch({ type: CHALLENGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CHALLENGE_LIST_FAIL, payload: error.message });
  }
};

export const detailsChallenge = (challengeId) => async (dispatch) => {
  dispatch({ type: CHALLENGE_DETAILS_REQUEST, payload: challengeId });
  try {
    const { data } = await Axios.get(`/challenges/${challengeId}`);
    dispatch({ type: CHALLENGE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CHALLENGE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userRegister = () => async (dispatch) => {
  dispatch({ type: USERS_REGISTER_REQUEST });
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const data = await auth.signInWithPopup(provider);
    dispatch({
      type: USERS_REGISTER_SUCCESS,
      payload: {
        uid: data.user.uid,
        email: data.user.email,
      },
    });
    localStorage.setItem('user', JSON.stringify({
      uid: data.user.uid,
      email: data.user.email,
    }));
  } catch (error) {
    dispatch({ type: USERS_REGISTER_FAIL, payload: error.message });
  }
};
