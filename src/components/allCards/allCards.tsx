import { ICard } from 'interfaces/ICardInterfaces';
import Card from '../card/card';
import classes from './allCards.module.scss';

interface IAllCards {
  cards: ICard[];
}

const AllCards = (allCards: IAllCards) => {
  return (
    <div className={classes.allCards}>
      {allCards.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AllCards;
