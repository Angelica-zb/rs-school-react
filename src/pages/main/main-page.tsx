import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import AllCards from '../../components/allCards/allCards';
import Search from '../../components/search/search';
import Modal from '../../components/modal/modal';
import Loader from '../../components/loader/loader';
import ErrorMessage from '../../components/errorMessage/errorMessage';
import { getDataCard } from '../../components/Api/api';
import { ICard } from 'interfaces/ICardInterfaces';
import classes from './main.module.scss';
import { searchSlice } from '../../store/reducers/searchSlice';

const textError = {
  notFound: 'Nothing found',
};

const Main = () => {
  const { textSearch } = useAppSelector((state) => state.searchReducer);
  const { isLoading } = useAppSelector((state) => state.searchReducer);
  const { handleLoading } = searchSlice.actions;
  const dispatch = useAppDispatch();

  const [CardData, setCardData] = useState<ICard[]>([]);
  const [idD, setId] = useState<number>(0);
  const [showModal, setShowModalt] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const y = async () => {
      const d = await getDataCard(textSearch);
      dispatch(handleLoading(false));
      if (d) {
        setCardData(d);
        setErrorMessage(false);
      } else {
        setErrorMessage(true);
        setCardData([]);
      }
    };
    y();
  }, [textSearch]);

  const onShowModal = (id: number) => {
    setId(id);
    setShowModalt(!showModal);
  };

  const onShowModal2 = () => {
    setShowModalt(!showModal);
  };

  return (
    <section className={classes.mainSection}>
      <Search />

      {isLoading ? (
        <Loader />
      ) : errorMessage ? (
        <ErrorMessage message={textError.notFound} />
      ) : (
        <AllCards onShowModal={onShowModal} results={CardData} />
      )}
      {showModal && <Modal id={idD} active={showModal} setActive={onShowModal2} />}
    </section>
  );
};

export default Main;
