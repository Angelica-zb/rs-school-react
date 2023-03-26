import React from 'react';
import classes from '../userCards/userCards.module.scss';
import { IForms } from '../../interfaces/ICardInterfaces';
import UserCard from '../userCard/userCard';
// import Forms from '../../components/formsBlank/forms';

class UserCards extends React.Component<{ allCards: Array<IForms> }> {
  render() {
    if (this.props.allCards.length > 0) {
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
