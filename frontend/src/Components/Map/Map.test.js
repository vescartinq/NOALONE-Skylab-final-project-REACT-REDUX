import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Map from './Map';

const buildStore = configureStore({ thunk });

describe('Map', () => {
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

  test('should be rended with the box closed', () => {
    const initialState = {
      googleMapURL: { mapURL: 'url' },
      containerElement: {},
      mapElement: {},
      loadingElement: {},
    };

    wrapper = wrapperFactory(initialState);
    render(<Map actions={initialState} />, { wrapper });
    expect(<Map />).toBeDefined();
  });
});
