import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from '../Components/Header/Header';

const buildStore = configureStore({ thunk });

describe('Header', () => {
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

  test('should be rended with a user signin', () => {
    const initialState = {
      openAction: jest.fn({ open: false }),
      user: { active: true },
    };

    wrapper = wrapperFactory(initialState);
    render(<Header openAction={initialState} />, { wrapper });
    expect(<Header />).toBeDefined();
  });

  test('should be rended with a user signout', () => {
    const initialState = {
      openAction: jest.fn({ open: false }),
      user: { active: false },
    };

    wrapper = wrapperFactory(initialState);
    render(<Header openAction={initialState} />, { wrapper });
    expect(<Header />).toBeDefined();
  });

  test('should be rended opened', () => {
    const initialState = {
      openAction: jest.fn({ open: true }),
      user: { active: false },
    };

    wrapper = wrapperFactory(initialState);
    render(<Header openAction={initialState} />, { wrapper });
    expect(<Header />).toBeDefined();
  });

  // TODO onClick signOut
});
