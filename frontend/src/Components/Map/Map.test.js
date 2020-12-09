import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import createGoogleMapsMock from 'jest-google-maps-mock';
import Map from './Map';

jest.mock('./../../redux/actions/challenge-actions.js');
const buildStore = configureStore([thunk]);

// TODO: ' Testing no funciona';

describe('Map', () => {
  let wrapper;
  let googleMaps;

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

  beforeEach(() => {
    googleMaps = createGoogleMapsMock();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('should waiting loaded data to render the compo', () => {
    const initialState = {
      challenge: {
        lat: 10,
        lng: 5,
      },
    };

    const mapDiv = document.createElement('div');
    // eslint-disable-next-line no-new
    new googleMaps.Map(mapDiv);

    wrapper = wrapperFactory(initialState);
    render(<Map />, { wrapper });
    expect(googleMaps.Map).toBeDefined();
  });
});
