import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createChallenge } from '../../redux/actions/challenge-actions';
import CreateChallengeScreen from './CreateChallengeScreen';

jest.mock('./../../redux/actions/challenge-actions.js');
const buildStore = configureStore([thunk]);

describe('CreateChallengeScreen', () => {
  let wrapper;
  const wrapperFactory = (wrapperInitialState) => {
    const store = buildStore(wrapperInitialState);
    store.dispatch = jest.fn();
    return ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  };

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('should waiting loaded data to render the compo', () => {
    const initialState = {
      challengeList: {
        loading: true,
        error: false,
        projects: [{
          _id: '1', name: 'Title Name', description: 'Description', miniDescription: 'miniDescription', category: 'category', image: 'image', target: 0, collected: 0, participants: 0, days: 0, creator: 'creator',
        }],
      },
    };

    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    expect(document.querySelector('.form-builder').textContent).toBeDefined();
  });

  test('should render submit button', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    expect(document.getElementById('submit-form')).toHaveTextContent('CREAR RETO');
  });

  test('should dispatch on click call the function dispatch', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    document.getElementById('submit-form').click();
    expect(createChallenge).toHaveBeenCalled();
  });
});
