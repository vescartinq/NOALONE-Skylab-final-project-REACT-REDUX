import axios from 'axios';
import actionTypes from './actionTypes';

const serverChallengesUrl = 'http://localhost:2802/challenges';

export function requestChallengesSuccess(challenges) {
  return {
    type: actionTypes.LOAD_CHALLENGES,
    challenges,
  };
}

export function requestChallengesError(challengesError) {
  return {
    type: actionTypes.LOAD_CHALLENGES_ERROR,
    challengesError,
  };
}

export function requestChallenges() {
  return async (dispatch) => {
    try {
      const challenges = await axios.get(serverChallengesUrl);
      dispatch(requestChallengesSuccess(challenges.data));
    } catch (error) {
      dispatch(requestChallengesError(error));
    }
  };
}
