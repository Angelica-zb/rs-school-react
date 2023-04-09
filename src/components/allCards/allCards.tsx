import { IAllCards } from '../../interfaces/ICardInterfaces';
import Card from '../card/card';
import classes from './allCards.module.scss';

const AllCards = (allCards: IAllCards) => {
  return (
    <div className={classes.allCards}>
      {allCards.results.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AllCards;
