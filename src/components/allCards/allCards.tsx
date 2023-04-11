import { ICard } from '../../interfaces/ICardInterfaces';
import Card from '../card/card';
import classes from './allCards.module.scss';

interface IAllCards {
  results: ICard[];
  onShowModal: (id: number) => void;
}

const AllCards = (allCards: IAllCards) => {
  const onShowModal = (id: number) => {
    allCards.onShowModal(id);
  };

  return (
    <div className={classes.allCards}>
      {allCards.results.map((card) => (
        <Card onShowModal={onShowModal} key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AllCards;

//
