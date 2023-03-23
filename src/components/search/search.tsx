import React from 'react';
import classes from './search.module.scss';

interface ISearch {
  textSearch: string;
}

class Search extends React.Component<object, ISearch> {
  constructor(props: object) {
    super(props);
    this.state = {
      textSearch: localStorage.getItem('LocalStorageSearch') || '',
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      textSearch: e.target.value,
    });
  }
  componentWillUnmount(): void {
    localStorage.setItem('LocalStorageSearch', `${this.state.textSearch}`);
  }

  render() {
    const value = this.state.textSearch;

    return (
      <div className={classes.search}>
        <input id="search" type="text" value={value} onChange={this.changeText} />
        <input type="submit" value="SEARCH" />
      </div>
    );
  }
}

export default Search;
