import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import Modal from './modal';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from '../../store/store';

const store = setupStore();

describe('should not render', () => {
  test('does not render the modal when card data is not available', async () => {
    const setActive = vitest.fn();
    const { rerender } = render(
      <BrowserRouter>
        <Provider store={store}>
          {' '}
          <Modal id={1} active={true} setActive={setActive} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.queryByRole('dialog')).toBeNull();
    await rerender(
      <BrowserRouter>
        <Provider store={store}>
          {' '}
          <Modal id={1} active={false} setActive={setActive} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.queryByRole('dialog')).toBeNull();
  });
  vitest.mock('../../components/Api/api', () => ({
    getCard: vitest.fn().mockResolvedValue({
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      gender: 'Male',
      type: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    }),
  }));
});
