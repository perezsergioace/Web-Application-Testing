import React from 'react';
import { render, getByText } from '@testing-library/react';
import App from './App'
import Display from './components/Display';

test('App renders without crashing', () => {
  render(<App />);
});

test('Check to see if Strikes: and Balls: is displayed on the DOM', () => {
  const { getByText } = render(<Display />);

  getByText('Strikes:');
  getByText('Balls:');
})