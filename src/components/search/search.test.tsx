import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from '../../store/store';
import Search from './search';

const store = setupStore();

describe('Search', () => {
  test('should renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          {' '}
          <Search />
        </Provider>
      </BrowserRouter>
    );
    const searchInput = getByPlaceholderText('Введите текст');
    const searchButton = getByText('SEARCH');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('should updates input value when typed in', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          {' '}
          <Search />
        </Provider>
      </BrowserRouter>
    );
    const searchInput = getByPlaceholderText('Введите текст') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'testing' } });
    expect(searchInput.value).toBe('testing');
  });
});
