import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import LoginScreen from './LoginScreen';

describe('LoginScreen', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(
        <BrowserRouter>
          <LoginScreen />
        </BrowserRouter>,
        container,
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Should have a title', () => {
    expect(container.getElementsByClassName('login-page')).toBeDefined();
  });
});
