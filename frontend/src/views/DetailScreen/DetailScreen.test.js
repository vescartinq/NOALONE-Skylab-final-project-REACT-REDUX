import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DetailScreen from './DetailScreen';

jest.mock('../../redux/actions/challenge-actions.js');
const buildStore = configureStore([thunk]);

describe('DetailScreen', () => {
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

  test('should be rended', () => {
    const initialState = {
      challengeDetails: {
        loading: true,
        error: false,
        projects: [{
          _id: '1', name: 'Title Name', description: 'Description', miniDescription: 'miniDescription', category: 'category', image: 'image', target: 0, collected: 0, participants: 0, days: 0, creator: 'creator',
        }],
      },
    };

    wrapper = wrapperFactory(initialState);
    render(<DetailScreen />, { wrapper });
    expect(<DetailScreen />).toBeDefined();
  });

  test('should waiting loaded data to render the compo', () => {
    const initialState = {
      challengeDetails: {
        loading: true,
        error: false,
        projects: [{
          _id: '1', name: 'Title Name', description: 'Description', miniDescription: 'miniDescription', category: 'category', image: 'image', target: 0, collected: 0, participants: 0, days: 0, creator: 'creator',
        }],
      },
    };

    wrapper = wrapperFactory(initialState);
    render(<DetailScreen />, { wrapper });
    expect(document.querySelector('.loading').textContent).toBe('LOADING');
  });

  test('should waiting loaded data to render the compo', () => {
    const initialState = {
      challengeDetails: {
        loading: false,
        error: true,
        projects: [{
          _id: '1', name: 'Title Name', description: 'Description', miniDescription: 'miniDescription', category: 'category', image: 'image', target: 0, collected: 0, participants: 0, days: 0, creator: 'creator',
        }],
      },
    };

    wrapper = wrapperFactory(initialState);
    render(<DetailScreen />, { wrapper });
    expect(document.querySelector('.error').textContent).toBe('ERROR');
  });

  test('should rended ChallengeCard', () => {
    const initialState = {
      challengeDetails: {
        loading: true,
        error: false,
        projects: [{
          _id: '1', name: 'Title Name', description: 'Description', miniDescription: 'miniDescription', category: 'category', image: 'image', target: 0, collected: 0, participants: 0, days: 0, creator: 'creator',
        }],
      },
    };

    wrapper = wrapperFactory(initialState);
    render(<DetailScreen />, { wrapper });
    expect(document.querySelector('.ChallengeCard-item')).not.toBeUndefined();
  });
});
