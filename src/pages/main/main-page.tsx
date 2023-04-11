import AllCards from '../../components/allCards/allCards';
import Search from '../../components/search/search';
import { getDataCard } from '../../components/Api/api';
import { useEffect, useState } from 'react';
import { ICard } from 'interfaces/ICardInterfaces';
import Modal from '../../components/modal/modal';
import classes from './main.module.scss';
import Loader from '../../components/loader/loader';

const Main = () => {
  const [CardData, setCardData] = useState<ICard[]>([]);
  const [textSearch] = useState(localStorage.getItem('LocalStorageSearch') || '');
  const [idD, setId] = useState<number>(0);
  const [showModal, setShowModalt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const y = async () => {
      const d = await getDataCard(textSearch);
      setIsLoading(false);
      if (d) {
        setCardData(d);
      } else {
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

      {isLoading ? <Loader /> : <AllCards onShowModal={onShowModal} results={CardData} />}

      {showModal && <Modal id={idD} active={showModal} setActive={onShowModal2} />}
    </section>
  );
};

export default Main;
