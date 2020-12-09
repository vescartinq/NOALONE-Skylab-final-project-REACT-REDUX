import actionTypes from '../actions/actionTypes';

const initialState = { loading: false, active: false };

export const challengeListReducer = (
  state = { loading: true, challenges: [] },
  action,
) => {
  switch (action.type) {
    case actionTypes.CHALLENGE_LIST_REQUEST:
      return { loading: true };
    case actionTypes.CHALLENGE_LIST_SUCCESS:
      return { loading: false, challenges: action.payload };
    case actionTypes.CHALLENGE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const challengeDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case actionTypes.CHALLENGE_DETAILS_REQUEST:
      return { loading: true };
    case actionTypes.CHALLENGE_DETAILS_SUCCESS:
      return { loading: false, challenge: action.payload };
    case actionTypes.CHALLENGE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERS_REGISTER_REQUEST:
      return { ...state, loading: true };
    case actionTypes.USERS_REGISTER_SUCCESS:
      return {
        ...state, loading: false, user: action.payload, active: true,
      };
    case actionTypes.USERS_REGISTER_FAIL:
      return { ...initialState };
    case actionTypes.SIGN_OUT_SUCCESS:
      return { ...initialState };
    default:
      return { ...state };
  }
};

export const challengeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CHALLENGE_CREATE_REQUEST:
      return { loading: true };
    case actionTypes.CHALLENGE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        challenge: [...state.challenges, action.newChallenge],
      };
    case actionTypes.CHALLENGE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.CHALLENGE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteChallengeReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case actionTypes.CHALLENGE_DELETE_REQUEST:
      return { loading: true };
    case actionTypes.CHALLENGE_DELETE_SUCCESS:
      return { loading: false, challenge: action.payload };
    case actionTypes.CHALLENGE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
