import React from 'react';
import { ICard } from '../../interfaces/ICardInterfaces';
import classes from './card.module.scss';

interface IOneCard {
  key: number;
  card: ICard;
}
class Card extends React.Component<IOneCard, object> {
  render() {
    return (
      <div className={classes.cardItem}>
        <img className={classes.cardImg} src={this.props.card.image}></img>
        <div className={classes.descriptionCard}>
          <p className={classes.cardTitle}>{this.props.card.name}</p>
          <p className={classes.cardDescription}>{this.props.card.description}</p>
          <div className={classes.cardCost}>
            <p className={classes.cardPrise}>{this.props.card.cost + ' '}</p>
            <span className={classes.cash}>$</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
