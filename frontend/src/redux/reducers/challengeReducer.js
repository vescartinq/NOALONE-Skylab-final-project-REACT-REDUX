import actionTypes from '../actions/actionTypes';

export default function challengesReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_CHALLENGES:
      return { ...state, challenge: action.challenge };
    case actionTypes.LOAD_CHALLENGE_ERROR:
      return { ...state, errorChallenge: action.challengesError };
    case actionTypes.LOAD_CHALLENGES_ERROR:
      return { ...state, errorChallenge: action.challengesError };
    default:
      return state;
  }
}
