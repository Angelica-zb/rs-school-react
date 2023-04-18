import UserCard from '../userCard/userCard';
import { IForms } from '../../interfaces/ICardInterfaces';
import classes from '../userCards/userCards.module.scss';

const UserCards = (allCards: Array<IForms>) => {
  if (allCards.length) {
    return (
      <div className={classes.allCards}>
        {allCards.map((card, index) => (
          <UserCard key={index} formaValid={card} />
        ))}
      </div>
    );
  }

  return null;
};

export default UserCards;
