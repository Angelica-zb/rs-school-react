import UserCard from '../userCard/userCard';
import { IForms } from '../../interfaces/ICardInterfaces';
import classes from '../userCards/userCards.module.scss';

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
