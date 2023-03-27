import React from 'react';
import { render } from '@testing-library/react';

import { IForms } from '../../interfaces/ICardInterfaces';
import UserCard from './userCard';

describe('UserCard', () => {
  const mockFormData: IForms = {
    name: 'John Doe',
    foto: 'http://example.com/avatar.jpg',
    birth: '1990-01-01',
    fruit: 'apple',
    male: 'male',
    agreement: true,
  };

  it('renders correctly', () => {
    const { getByAltText, getByText } = render(<UserCard formaValid={mockFormData} />);
    expect(getByAltText('foto')).toBeInTheDocument();
    expect(getByText('Имя:John Doe')).toBeInTheDocument();
    expect(getByText('Пол: male')).toBeInTheDocument();
    expect(getByText('Дата рождения: 1990-01-01')).toBeInTheDocument();
    expect(getByText('Любимый фрукт: apple')).toBeInTheDocument();
  });
});
