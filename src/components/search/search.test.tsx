import { render, fireEvent } from '@testing-library/react';
import Search from './search';

describe('Search', () => {
  test('should renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Search />);
    const searchInput = getByPlaceholderText('Введите текст');
    const searchButton = getByText('SEARCH');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('should updates input value when typed in', () => {
    const { getByPlaceholderText } = render(<Search />);
    const searchInput = getByPlaceholderText('Введите текст') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'testing' } });
    expect(searchInput.value).toBe('testing');
  });

  test('should saves input value to localStorage on component unmount', () => {
    const { getByPlaceholderText, unmount } = render(<Search />);
    const searchInput = getByPlaceholderText('Введите текст');
    fireEvent.change(searchInput, { target: { value: 'testing' } });
    unmount();
    expect(localStorage.getItem('LocalStorageSearch')).toBe('testing');
  });
});
