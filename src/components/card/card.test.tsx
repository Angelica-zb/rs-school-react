import { render, screen } from '@testing-library/react';
import Card from './card';

describe('Card', () => {
  const card = {
    id: 1,
    name: 'Яблоки',
    cost: 12,
    description: 'Яблоки спелые, очень красивые',
    image: 'https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_500.jpg',
  };

  it('should render correct img', () => {
    render(<Card key={1} card={card} />);
    expect(screen.getByRole('img').getAttribute('src')).toBe(card.image);
  });

  it('should render correct title', () => {
    render(<Card key={1} card={card} />);
    expect(screen.getByText(card.name)).toBeTruthy();
  });
});
