import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(
        <BrowserRouter>
          <App />
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

  it('Should render without crashing', () => {
    expect(document.getElementById('test-btn')).toBeDefined();
  });
});
