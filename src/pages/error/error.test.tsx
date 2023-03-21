import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './error-page';

describe('Error', () => {
  it('render correct', () => {
    render(<Error />);
    expect(screen.getByText('Error 404')).toBeTruthy();
  });
});
