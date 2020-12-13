/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

import { auth, firebase } from '../../Firebase/firebase';

const serverUsersUrl = 'http://localhost:3000/users';

export function addUserSuccess(user) {
  return {
    type: actionTypes.ADD_USER,
    user,
  };
}

export function addUserError(userError) {
  return {
    type: actionTypes.ADD_USER_ERROR,
    userError,
  };
}

export function addUser(userData) {
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(serverUsersUrl, userData);
      dispatch(addUserSuccess(data));
    } catch (error) {
      dispatch(addUserError(error));
    }
  };
}

export function loadUserSuccess(user) {
  return {
    type: actionTypes.LOAD_USER,
    user,
  };
}

export function loadUserError(userError) {
  return {
    type: actionTypes.LOAD_USER_ERROR,
    userError,
  };
}

export function loadUser(userData) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(serverUsersUrl, userData);
      dispatch(loadUserSuccess(data));
    } catch (error) {
      dispatch(loadUserError(error));
    }
  };
}

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
