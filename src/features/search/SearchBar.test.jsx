import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import SearchBar from './SearchBar';

test('renders SearchBar', () => {
  render(<Provider store={store}><SearchBar /></Provider>);
  expect(screen.getByPlaceholderText(/Search Reddit/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
});