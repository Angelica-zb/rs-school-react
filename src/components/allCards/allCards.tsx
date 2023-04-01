import { ICard } from 'interfaces/ICardInterfaces';
import React from 'react';
import Card from '../card/card';
import classes from './allCards.module.scss';

interface IAllCards {
  cards: ICard[];
}

class AllCards extends React.Component<IAllCards, object> {
  render() {
    return (
      <div className={classes.allCards}>
        {this.props.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}

export default AllCards;
