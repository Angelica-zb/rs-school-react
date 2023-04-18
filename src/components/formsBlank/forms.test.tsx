import { render, screen } from '@testing-library/react';
import Forms from './forms';

describe('Forms component', () => {
  it('should renders all form fields', () => {
    const submit = () => {};
    render(<Forms onSubmitPage={submit} />);
    expect(screen.getByLabelText('Введите имя:')).toBeInTheDocument();
    expect(screen.getByLabelText('Добавьте фото:')).toBeInTheDocument();
    expect(screen.getByLabelText('Введите дату рождения:')).toBeInTheDocument();
    expect(screen.getByLabelText('Выберите любимый фрукт:')).toBeInTheDocument();
    expect(screen.getByLabelText('Мужской')).toBeInTheDocument();
    expect(screen.getByLabelText('Женский')).toBeInTheDocument();
    expect(screen.getByLabelText('Согласен с обработкой данных')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Отправить' })).toBeInTheDocument();
  });
});
