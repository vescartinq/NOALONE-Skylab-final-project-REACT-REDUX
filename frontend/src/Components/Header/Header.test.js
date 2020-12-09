import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from './Header';

const buildStore = configureStore({ thunk });

describe('DrawerBox', () => {
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
      openAction: jest.fn({ open: false }),
    };

    wrapper = wrapperFactory(initialState);
    render(<Header actions={initialState} />, { wrapper });
    expect(<Header />).toBeDefined();
  });

  test('should be rended with the box opened', () => {
    const initialState = {
      openAction: jest.fn({ open: true }),
    };

    wrapper = wrapperFactory(initialState);
    render(<Header actions={initialState} />, { wrapper });
    expect(<Header />).toBeDefined();
  });
});
