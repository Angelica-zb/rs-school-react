import React from 'react';
import classes from '../userCard/userCard.module.scss';
import { IForms } from '../../interfaces/ICardInterfaces';

class UserCard extends React.Component<{ formaValid: IForms }> {
  render(): JSX.Element | undefined {
    return (
      <div className={classes.userCard}>
        <div>
          <img src={this.props.formaValid.foto} alt="foto" />
          <p>Имя:{this.props.formaValid.name}</p>
        </div>
        <div>
          <p>Пол: {this.props.formaValid.male}</p>
          <p>Дата рождения: {this.props.formaValid.birth}</p>
          <p>Любимый фрукт: {this.props.formaValid.fruit}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
