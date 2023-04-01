import React from 'react';
import classes from '../userCards/userCards.module.scss';
import { IForms } from '../../interfaces/ICardInterfaces';
import UserCard from '../userCard/userCard';

class UserCards extends React.Component<{ allCards: Array<IForms> }> {
  render() {
    if (this.props.allCards.length) {
      return (
        <div className={classes.allCards}>
          {this.props.allCards.map((card, index) => (
            <UserCard key={index} formaValid={card} />
          ))}
        </div>
      );
    }
  }
}

export default UserCards;
