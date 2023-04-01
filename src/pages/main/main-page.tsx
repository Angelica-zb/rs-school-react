import AllCards from '../../components/allCards/allCards';
import { CardData } from '../../constants/cardsData/cardsData';
import React from 'react';
import Search from '../../components/search/search';

class Main extends React.Component {
  render() {
    return (
      <section>
        <Search />
        <AllCards cards={CardData} />
      </section>
    );
  }
}

export default Main;
