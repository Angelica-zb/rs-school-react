import { render, screen } from '@testing-library/react';
import Main from '../main/main-page';

test('renders the search component', () => {
  render(<Main />);
  const searchElement = screen.getByPlaceholderText('Введите текст');
  expect(searchElement).toBeInTheDocument();
});
