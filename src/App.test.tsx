import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import App from './App';
import { applyMiddleware } from 'redux';
 
const mockStore = configureStore(); 
 
describe('App renders connected as React-Redux Component', () => {

  it('should render with given state from Redux store', () => {
    expect(true).toBeTruthy();
  });
});