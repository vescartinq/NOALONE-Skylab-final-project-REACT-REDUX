import Axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './challenge-actions';
import {
  CHALLENGE_LIST_REQUEST,
  CHALLENGE_LIST_SUCCESS,
  CHALLENGE_LIST_FAIL,
  CHALLENGE_DETAILS_REQUEST,
  CHALLENGE_DETAILS_SUCCESS,
  CHALLENGE_DETAILS_FAIL,
} from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

describe('Challenge-actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    store = null;
    Axios.mockRestore();
  });

  describe('listChallenges', () => {
    test('should call ChallengeListSuccess', async () => {
      const response = {
        data: [
          {
            _id: '1',
            challengeItem: 'a',
          },
          {
            _id: '2',
            challengeItem: 'b',
          },
        ],
      };

      Axios.get.mockImplementationOnce(() => Promise.resolve(response));
      await store.dispatch(actions.listChallenges());

      expect(store.getActions()).toEqual([{
        type: CHALLENGE_LIST_SUCCESS,
        payload: response.data,
      }]);
    });
  });
});
