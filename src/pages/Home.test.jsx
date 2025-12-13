import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Home from './Home';

test('renders Home components', () => {
  render(<Provider store={store}><Home /></Provider>);
  // Look for the Search button
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  // Look for one of the subreddit buttons
  expect(screen.getByText(/r\/reactjs/i)).toBeInTheDocument();
});