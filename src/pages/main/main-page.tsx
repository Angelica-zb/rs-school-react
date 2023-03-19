import AllCards from '../../components/allCards/allCards';
import { CardData } from '../../components/cardsData/cardsData';
import React from 'react';
import Search from '../../components/search/search';

export default class Main extends React.Component {
  render() {
    return (
      <>
        <h1>Main</h1>
        <section>
          <Search />
          <AllCards cards={CardData} />
        </section>
      </>
    );
  }
}
