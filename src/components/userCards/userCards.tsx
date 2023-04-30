import UserCard from '../userCard/userCard';
import { IForms } from '../../interfaces/ICardInterfaces';
import classes from '../userCards/userCards.module.scss';

interface IFormsAll {
  allCards: Array<IForms>;
}

const UserCards = ({ allCards }: IFormsAll) => {
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
