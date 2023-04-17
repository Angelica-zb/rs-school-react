import { useForm } from 'react-hook-form';
import { CardData } from '../../constants/cardsData/cardsData';
import { IForms } from '../../interfaces/ICardInterfaces';
import classes from '../formsBlank/forms.module.scss';

interface IFormDataPage {
  onSubmitPage: (card: IForms) => void;
}

const Forms = (formData: IFormDataPage) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      foto: '',
      birth: '',
      movie: '',
      fruit: '',
      male: '',
      agreement: false,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data: IForms) => {
    const { name, foto, birth, fruit, male, agreement } = data;
    const cardData = {
      name: name,
      foto: URL.createObjectURL(foto[0] as Blob | MediaSource),
      birth: birth,
      fruit: fruit,
      male: male,
      agreement: agreement,
    };
    alert('Вы в списке');
    formData.onSubmitPage(cardData);
    reset();
  };

  return (
    <div className={classes.formsContainer}>
      <form className={classes.forms} onSubmit={handleSubmit(onSubmit)}>
        Любитель фруктов:
        <label className={classes.name}>
          Введите имя:
          <input
            type="text"
            {...register('name', {
              required: 'Введите имя',
              minLength: {
                value: 3,
                message: 'Mинимум три буквы',
              },
            })}
          />
        </label>
        <div className={classes.active}>
          {errors?.name && (
            <p>
              {errors?.name?.message?.toString() || 'Введите корректное имя, минимум три буквы'}
            </p>
          )}
        </div>
        <label>
          Добавьте фото:
          <input
            type="file"
            {...register('foto', {
              required: 'Добавьте фото',
            })}
          />
        </label>
        <div className={classes.active}>
          {errors?.foto && <p>{errors?.foto?.message?.toString() || 'Добавьте фото'}</p>}
        </div>
        <label>
          Введите дату рождения:
          <input
            type="date"
            {...register('birth', {
              required: 'Введите дату рождения',
              validate: (value) =>
                new Date(value).getTime() < new Date().getTime() || 'Вы еще не родились',
            })}
          />
        </label>
        <div className={classes.active}>
          {errors?.birth && <p>{errors?.birth?.message?.toString() || 'Введите дату рождения'}</p>}
        </div>
        <div>
          <label>
            Выберите любимый фрукт:
            <select
              {...register('fruit', {
                required: 'Фрукт не выбран',
              })}
            >
              <option key="0" value="">
                {''}
              </option>
              {CardData.map((card) => (
                <option key={card.id} value={card.name}>
                  {card.name}
                </option>
              ))}
            </select>
          </label>
          <div className={classes.active}>
            {errors?.fruit && <p>{errors?.fruit?.message?.toString()}</p>}
          </div>
        </div>
        <div>
          Пол:
          <label>
            <input
              type="radio"
              value="male"
              {...register('male', {
                required: 'Пол не выбран',
              })}
            />
            Мужской
          </label>
          <label>
            <input
              type="radio"
              value="female"
              {...register('male', {
                required: 'Пол не выбран',
              })}
            />
            Женский
          </label>
          <div className={classes.active}>
            {errors?.male && <p>{errors?.male?.message?.toString()}</p>}
          </div>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              {...register('agreement', {
                required: 'Подтвердите согласие',
              })}
            />
            Согласен с обработкой данных
          </label>
          <div className={classes.active}>
            {errors?.agreement && <p>{errors?.agreement?.message?.toString()}</p>}
          </div>
        </div>
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export default Forms;
