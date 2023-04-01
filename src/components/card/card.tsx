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
        <p className={classes.cardDescription}>{oneCard.card.description}</p>
        <div className={classes.cardCost}>
          <p className={classes.cardPrise}>{oneCard.card.cost + ' '}</p>
          <span className={classes.cash}>$</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
