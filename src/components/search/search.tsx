import React from 'react';
import classes from './search.module.scss';

export default class Search extends React.Component {
  render() {
    return (
      <div className={classes.search}>
        <input id="search" type="text" />
        <input type="submit" value="SEARCH" />
      </div>
    );
  }
}
