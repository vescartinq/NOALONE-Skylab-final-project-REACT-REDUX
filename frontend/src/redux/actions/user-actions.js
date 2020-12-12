/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

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
