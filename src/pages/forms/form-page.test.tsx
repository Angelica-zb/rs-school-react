import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormsPage from './forms-page';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from '../../store/store';

const store = setupStore();

test('form submission adds new entry to the list', async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        {' '}
        <FormsPage />
      </Provider>
    </BrowserRouter>
  );

  const nameInput = screen.getByLabelText('Введите имя:');
  const emailInput = screen.getByLabelText('Добавьте фото:');
  const phoneInput = screen.getByLabelText('Введите дату рождения:');
  const submitButton = screen.getByRole('button', { name: 'Отправить' });

  userEvent.type(nameInput, 'John');
  userEvent.type(emailInput, 'john@example.com');
  userEvent.type(phoneInput, '1234567890');
  userEvent.click(submitButton);
});
