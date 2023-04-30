import { useGetCardQuery } from '../../store/reducers/apiSlice';
import classes from './modal.module.scss';

interface IModal {
  id: number;
  setActive: (show: boolean) => void;
}

const Modal = ({ id, setActive }: IModal) => {
  const { data } = useGetCardQuery(id);

  const handleClick = () => {
    setActive(false);
  };

  if (data) {
    return (
      <div
        className={classes.modalItem}
        onClick={() => {
          handleClick();
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
              handleClick();
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
  }

  return null;
};

export default Modal;
