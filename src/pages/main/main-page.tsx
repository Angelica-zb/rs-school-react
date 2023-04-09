import AllCards from '../../components/allCards/allCards';
import Search from '../../components/search/search';
import getDataCard from '../../components/Api/api';
import { useEffect, useState } from 'react';
import { ICard } from 'interfaces/ICardInterfaces';

const Main = () => {
  const [CardData, setCardData] = useState<ICard[]>([]);
  const [textSearch, setSearch] = useState(localStorage.getItem('LocalStorageSearch') || '');

  useEffect(() => {
    const y = async () => {
      const d = await getDataCard(textSearch);
      setSearch('');
      setCardData(d.results);
    };
    y();
  }, [textSearch]);

  return (
    <section>
      <Search />

      <AllCards results={CardData} />
    </section>
  );
};

export default Main;
