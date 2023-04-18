import { getCard } from '../../components/Api/api';
import { ICard } from '../../interfaces/ICardInterfaces';
import { useEffect, useState } from 'react';
import classes from './modal.module.scss';

interface IModal {
  id: number;
  active: boolean;
  setActive: (show: boolean) => void;
}

const Modal = (dataModal: IModal) => {
  const [CardDataShow, setCardDataShow] = useState<ICard>();

  useEffect(() => {
    const y = async () => {
      const oneCard = await getCard(dataModal.id);
      setCardDataShow(oneCard);
    };
    y();
  }, [dataModal]);

  if (CardDataShow) {
    return (
      <div
        className={classes.modalItem}
        onClick={() => {
          console.log(dataModal.active);
          dataModal.setActive(false);
        }}
      >
        <div
          className={classes.modalItemConteiner}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span
            onClick={() => {
              dataModal.setActive(false);
            }}
          >
            X
          </span>
          <div className={classes.modalConteiner}>
            <img className={classes.modalImg} src={CardDataShow.image}></img>
            <div className={classes.descriptionCard}>
              <p className={classes.modalTitle}>{CardDataShow.name}</p>
              <p className={classes.modalTitle}>{CardDataShow.status}</p>
              <p className={classes.modalTitle}>{CardDataShow.gender}</p>
              <p className={classes.modalTitle}>{CardDataShow.type}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};
export default Modal;
