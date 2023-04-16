import { IForms } from '../../interfaces/ICardInterfaces';
import classes from '../userCard/userCard.module.scss';

const UserCard = (allUserCard: { formaValid: IForms }) => {
  return (
    <div className={classes.userCard}>
      <div>
        <img src={allUserCard.formaValid.foto} alt="foto" />
        <p>Имя:{allUserCard.formaValid.name}</p>
      </div>
      <div>
        <p>Пол: {allUserCard.formaValid.male}</p>
        <p>Дата рождения: {allUserCard.formaValid.birth}</p>
        <p>Любимый фрукт: {allUserCard.formaValid.fruit}</p>
      </div>
    </div>
  );
};

export default UserCard;
