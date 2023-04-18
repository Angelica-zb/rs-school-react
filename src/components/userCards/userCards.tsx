import classes from '../userCards/userCards.module.scss';
import { IForms } from '../../interfaces/ICardInterfaces';
import UserCard from '../userCard/userCard';

const UserCards = (allCardsUserCards: { allCards: Array<IForms> }) => {
  if (allCardsUserCards.allCards.length) {
    return (
      <div className={classes.allCards}>
        {allCardsUserCards.allCards.map((card, index) => (
          <UserCard key={index} formaValid={card} />
        ))}
      </div>
    );
  }
  return null;
};

export default UserCards;
