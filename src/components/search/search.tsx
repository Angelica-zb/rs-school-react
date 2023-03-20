import React from 'react';
import classes from './search.module.scss';

interface ISearch {
  textSearch: string;
}

export default class Search extends React.Component<object, ISearch> {
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

  saveTextSearch = () => {
    localStorage.setItem('LocalStorageSearch', `${this.state.textSearch}`);
  };

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveTextSearch);
  }

  componentWillUnmount(): void {
    window.removeEventListener('beforeunload', this.saveTextSearch);
  }

  public componentDidUpdate(): void {
    this.saveTextSearch();
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
