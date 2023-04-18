import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from '../../store/store';
import Main from '../main/main-page';
const store = setupStore();

test('renders the search component', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        {' '}
        <Main />
      </Provider>
    </BrowserRouter>
  );
  const searchElement = screen.getByPlaceholderText('Введите текст');
  expect(searchElement).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
