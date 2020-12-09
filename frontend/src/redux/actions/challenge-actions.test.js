import Axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './challenge-actions';
import {
  CHALLENGE_LIST_REQUEST,
  CHALLENGE_DETAILS_REQUEST,
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
    test('should call ChallengeListRequest', async () => {
      const response = {
        type: CHALLENGE_LIST_REQUEST,
      };

      Axios.get.mockImplementationOnce(() => Promise.resolve(response));
      await store.dispatch(actions.listChallenges());

      expect(store.getActions()[0].type).toEqual(response.type);
    });

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

      expect(store.getActions()[1].payload).toEqual(response.data);
    });

    test('should call ChallengeListFail', async () => {
      const error = {
        type: 'CHALLENGE_LIST_FAIL',
      };

      Axios.get.mockImplementationOnce(() => Promise.rejected(error));
      await store.dispatch(actions.listChallenges());

      expect(store.getActions()[1].type).toEqual(error.type);
    });
  });

  describe('detailsChallenges', () => {
    const challenge = {
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
    test('should call ChallengeDetailsRequest', async () => {
      const response = {
        type: CHALLENGE_DETAILS_REQUEST,
      };

      Axios.get.mockImplementationOnce(() => Promise.resolve(response));
      await store.dispatch(actions.detailsChallenge(challenge.data.id));

      expect(store.getActions()[0].type).toEqual(response.type);
    });

    test('should call ChallengeDetailsFail', async () => {
      const error = {
        type: 'CHALLENGE_DETAILS_FAIL',
      };

      Axios.get.mockImplementationOnce(() => Promise.rejected(error));
      await store.dispatch(actions.detailsChallenge(challenge.data.id));

      expect(store.getActions()[1].type).toEqual(error.type);
    });
  });
});
