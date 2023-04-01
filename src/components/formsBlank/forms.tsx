import React from 'react';
import pageData from '../../constants/constants';
import classes from '../formsBlank/forms.module.scss';
import { CardData } from '../../constants/cardsData/cardsData';
import { IErrors, IForms } from 'interfaces/ICardInterfaces';

interface IDataForms {
  onClick: (objData: IForms) => void;
  clear: boolean;
  errors: IErrors;
}

class Forms extends React.Component<IDataForms> {
  formRef = React.createRef<HTMLFormElement>();
  nameRef = React.createRef<HTMLInputElement>();
  fotoRef = React.createRef<HTMLInputElement>();
  birthRef = React.createRef<HTMLInputElement>();
  fruitRef = React.createRef<HTMLSelectElement>();
  maleRef = React.createRef<HTMLInputElement>();
  femaleRef = React.createRef<HTMLInputElement>();
  agreementRef = React.createRef<HTMLInputElement>();

  submitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    const objData = {
      name: '',
      foto: '',
      birth: '',
      fruit: '',
      male: '',
      agreement: false,
    };
    event.preventDefault();

    if (this.nameRef.current?.value) {
      objData.name = this.nameRef.current.value;
    }

    if (this.fotoRef.current?.value) {
      objData.foto = this.fotoRef.current!.files?.length
        ? URL.createObjectURL(this.fotoRef.current!.files![0])
        : '';
    }

    if (this.birthRef.current?.value) {
      objData.birth = this.birthRef.current.value;
    }

    if (this.fruitRef.current?.value) {
      objData.fruit = this.fruitRef.current.value;
    }

    if (this.maleRef.current?.checked) {
      objData.male = this.maleRef.current.value;
    }

    if (this.femaleRef.current?.checked) {
      objData.male = this.femaleRef.current.value;
    }

    if (this.agreementRef.current?.value) {
      objData.agreement = this.agreementRef.current.checked;
    }

    this.props.onClick(objData);
  };
  componentDidUpdate(): void {
    if (this.props.clear) {
      this.formRef.current?.reset();
    }
  }
  render() {
    return (
      <div className={classes.formsContainer}>
        <form ref={this.formRef} className={classes.forms} onSubmit={this.submitForm}>
          Любитель фруктов:
          <div className={classes.name}>
            Введите имя:
            <input ref={this.nameRef} type="text" name={pageData.formsField[0]} />
            {this.props.errors.name && (
              <p className={classes.active}>Введите корректное имя, минимум три буквы</p>
            )}
          </div>
          <div>
            Добавьте фото:
            <input ref={this.fotoRef} type="file" name={pageData.formsField[1]} />
            {this.props.errors.foto && <p className={classes.active}>Добавьте фото</p>}
          </div>
          <div>
            Введите дату рождения:
            <input ref={this.birthRef} type="date" name={pageData.formsField[2]} />
            {this.props.errors.birth && <p className={classes.active}>Вы еще не родились</p>}
          </div>
          <div>
            Выберите любимый фрукт:
            <select ref={this.fruitRef} name={pageData.formsField[3]}>
              <option key="0" value="">
                {''}
              </option>
              {CardData.map((card) => (
                <option key={card.id} value={card.name}>
                  {card.name}
                </option>
              ))}
            </select>
            {this.props.errors.fruit && <p className={classes.active}>Фрукт не выбран</p>}
          </div>
          <div>
            Пол:
            <label>
              <input ref={this.maleRef} type="radio" value="male" name={pageData.formsField[4]} />
              Мужской
            </label>
            <label>
              <input
                ref={this.femaleRef}
                type="radio"
                value="female"
                name={pageData.formsField[4]}
              />
              Женский
            </label>
          </div>
          {this.props.errors.male && <p className={classes.active}>Пол не выбран</p>}
          <div>
            <label>
              <input ref={this.agreementRef} type="checkbox" name={pageData.formsField[5]} />
              Согласен с обработкой данных
            </label>
            {this.props.errors.agreement && <p className={classes.active}>Подтвердите согласие</p>}
          </div>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}

export default Forms;
