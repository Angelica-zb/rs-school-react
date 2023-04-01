import { render, screen } from '@testing-library/react';
import AboutUs from './aboutUs-page';

describe('AboutUs', () => {
  it('render correct', () => {
    render(<AboutUs />);
    expect(screen.getByText('Something interesting about us')).toBeTruthy();
  });
});
