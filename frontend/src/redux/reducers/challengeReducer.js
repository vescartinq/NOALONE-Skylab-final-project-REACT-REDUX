const {
  CHALLENGE_LIST_REQUEST,
  CHALLENGE_LIST_SUCCESS,
  CHALLENGE_LIST_FAIL,
  CHALLENGE_DETAILS_REQUEST,
  CHALLENGE_DETAILS_SUCCESS,
  CHALLENGE_DETAILS_FAIL,
  USERS_REGISTER_REQUEST,
  USERS_REGISTER_SUCCESS,
  USERS_REGISTER_FAIL,
  SIGN_OUT_SUCCESS,
} = require('../actions/actionTypes');

const initialState = { loading: false, active: false };

export const challengeListReducer = (
  state = { loading: true, challenges: [] },
  action,
) => {
  switch (action.type) {
    case CHALLENGE_LIST_REQUEST:
      return { loading: true };
    case CHALLENGE_LIST_SUCCESS:
      return { loading: false, challenges: action.payload };
    case CHALLENGE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const challengeDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case CHALLENGE_DETAILS_REQUEST:
      return { loading: true };
    case CHALLENGE_DETAILS_SUCCESS:
      return { loading: false, challenge: action.payload };
    case CHALLENGE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USERS_REGISTER_SUCCESS:
      return {
        ...state, loading: false, user: action.payload, active: true,
      };
    case USERS_REGISTER_FAIL:
      return { ...initialState };
    case SIGN_OUT_SUCCESS:
      return { ...initialState };
    default:
      return { ...state };
  }
};
