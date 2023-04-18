import { useGetCardQuery } from '../../store/reducers/apiSlice';
import classes from './modal.module.scss';

interface IModal {
  id: number;
  active: boolean;
  setActive: (show: boolean) => void;
}

const Modal = (dataModal: IModal) => {
  const { data } = useGetCardQuery(dataModal.id);

  if (data) {
    return (
      <div
        className={classes.modalItem}
        onClick={() => {
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
            <img className={classes.modalImg} src={data.image}></img>
            <div className={classes.descriptionCard}>
              <p className={classes.modalTitle}>{data.name}</p>
              <p className={classes.modalTitle}>{data.status}</p>
              <p className={classes.modalTitle}>{data.gender}</p>
              <p className={classes.modalTitle}>{data.type}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default Modal;
