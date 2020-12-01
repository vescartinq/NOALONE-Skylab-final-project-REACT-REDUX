import Axios from 'axios';
import {
  CHALLENGE_LIST_REQUEST,
  CHALLENGE_LIST_SUCCESS,
  CHALLENGE_LIST_FAIL,
  CHALLENGE_DETAILS_REQUEST,
  CHALLENGE_DETAILS_SUCCESS,
  CHALLENGE_DETAILS_FAIL,
} from './actionTypes';

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
  // eslint-disable-next-line no-debugger
  debugger;
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
