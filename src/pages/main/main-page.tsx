import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import AllCards from '../../components/allCards/allCards';
import Search from '../../components/search/search';
import Modal from '../../components/modal/modal';
import Loader from '../../components/loader/loader';
import ErrorMessage from '../../components/errorMessage/errorMessage';
import { useGetDataQuery } from '../../store/reducers/apiSlice';
import classes from './main.module.scss';

const textError = {
  notFound: 'Nothing found',
};

const Main = () => {
  const { textSearch } = useAppSelector((state) => state.searchReducer);
  const [idD, setId] = useState<number>(0);
  const [showModal, setShowModalt] = useState(false);
  const { data, isFetching, isError } = useGetDataQuery(textSearch);

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
      {isFetching ? (
        <Loader />
      ) : isError ? (
        <ErrorMessage message={textError.notFound} />
      ) : (
        <AllCards onShowModal={onShowModal} results={data.results} />
      )}
      {showModal && <Modal id={idD} setActive={onShowModal2} />}
    </section>
  );
};

export default Main;
