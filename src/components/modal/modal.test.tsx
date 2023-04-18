import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import Modal from './modal';

describe('Modal', () => {
  test('does not render the modal when card data is not available', async () => {
    const setActive = vitest.fn();
    const { rerender } = render(<Modal id={1} active={true} setActive={setActive} />);
    expect(screen.queryByRole('dialog')).toBeNull();
    await rerender(<Modal id={1} active={false} setActive={setActive} />);
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

  describe('Modal component', () => {
    test('renders the card data correctly', async () => {
      const setActive = vitest.fn();
      render(<Modal id={1} active={true} setActive={setActive} />);
      const title = await screen.findByText('Rick Sanchez');
      const status = await screen.findByText('Alive');
      const gender = await screen.findByText('Male');
      const type = await screen.findByText('Human');
      expect(title).toBeInTheDocument();
      expect(status).toBeInTheDocument();
      expect(gender).toBeInTheDocument();
      expect(type).toBeInTheDocument();
    });
  });
});
