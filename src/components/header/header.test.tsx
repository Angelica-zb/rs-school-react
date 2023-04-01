import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
  it('should render correct link', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getAllByRole('link')[0].getAttribute('href')).toBe('/');
    expect(screen.getAllByRole('link')[1].getAttribute('href')).toBe('/aboutus');
    expect(screen.getAllByRole('link')[2].getAttribute('href')).toBe('/forms');
  });
});
