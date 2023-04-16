import { ICard } from '../../interfaces/ICardInterfaces';
import classes from './card.module.scss';

interface IOneCard {
  key: number;
  card: ICard;
  onShowModal: (id: number) => void;
}

const Card = (oneCard: IOneCard) => {
  const onShowModal = (id: number) => {
    oneCard.onShowModal(id);
  };
  return (
    <div
      className={classes.cardItem}
      onClick={() => {
        onShowModal(oneCard.card.id);
      }}
    >
      <img className={classes.cardImg} src={oneCard.card.image}></img>
      <div className={classes.descriptionCard}>
        <p className={classes.cardTitle}>{oneCard.card.name}</p>
      </div>
    </div>
  );
};

export default Card;
