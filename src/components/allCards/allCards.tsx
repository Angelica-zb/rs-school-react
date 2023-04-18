import Card from '../card/card';
import { ICard } from '../../interfaces/ICardInterfaces';
import classes from './allCards.module.scss';

interface IAllCards {
  results: ICard[];
  onShowModal: (id: number) => void;
}

const AllCards = ({ results, onShowModal }: IAllCards) => {
  const handleClick = (id: number) => {
    onShowModal(id);
  };

  return (
    <div className={classes.allCards}>
      {results.map((card) => (
        <Card onShowModal={handleClick} key={card.id} card={card} />
      ))}
    </div>
  );
};

export default AllCards;
