import AllCards from '../../components/allCards/allCards';
import { CardData } from '../../constants/cardsData/cardsData';
import Search from '../../components/search/search';

const Main = () => {
  return (
    <section>
      <Search />
      <AllCards cards={CardData} />
    </section>
  );
};

export default Main;
