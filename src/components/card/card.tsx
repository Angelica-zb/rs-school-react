import { ICard } from '../../interfaces/ICardInterfaces';
import classes from './card.module.scss';

interface IOneCard {
  key: number;
  card: ICard;
}
const Card = (oneCard: IOneCard) => {
  return (
    <div className={classes.cardItem}>
      <img className={classes.cardImg} src={oneCard.card.image}></img>
      <div className={classes.descriptionCard}>
        <p className={classes.cardTitle}>{oneCard.card.name}</p>
      </div>
    </div>
  );
};

export default Card;
