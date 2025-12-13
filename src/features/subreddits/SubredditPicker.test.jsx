import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import SubredditPicker from './SubredditPicker';

test('renders subreddit buttons', () => {
  render(<Provider store={store}><SubredditPicker /></Provider>);
  expect(screen.getByText(/r\/reactjs/i)).toBeInTheDocument();
  expect(screen.getByText(/r\/javascript/i)).toBeInTheDocument();
});