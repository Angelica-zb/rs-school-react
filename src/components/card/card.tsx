import { ICard } from '../../interfaces/ICardInterfaces';
import classes from './card.module.scss';

interface IOneCard {
  card: ICard;
  onShowModal: (id: number) => void;
}

const Card = ({ card, onShowModal }: IOneCard) => {
  const handleClick = (id: number) => {
    onShowModal(id);
  };

  return (
    <div
      className={classes.cardItem}
      onClick={() => {
        handleClick(card.id);
      }}
    >
      <img className={classes.cardImg} src={card.image}></img>
      <div className={classes.descriptionCard}>
        <p className={classes.cardTitle}>{card.name}</p>
      </div>
    </div>
  );
};

export default Card;
