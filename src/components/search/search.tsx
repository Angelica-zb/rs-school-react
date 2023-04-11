import React, { useEffect, useState } from 'react';
import classes from './search.module.scss';

interface ISearch {
  onSubmitChange: (value: string) => void;
}

const Search = ({ onSubmitChange }: ISearch) => {
  const [textSearch, setSearch] = useState(localStorage.getItem('LocalStorageSearch') || '');

  const changeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('LocalStorageSearch', `${textSearch}`);
  }, [textSearch]);

  const submit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const x = localStorage.getItem('LocalStorageSearch') || '';
    onSubmitChange(x);
  };

  return (
    <form className={classes.search} onSubmit={submit}>
      <input
        id="search"
        placeholder="Введите текст"
        type="text"
        value={textSearch}
        onChange={changeText}
      />
      <input type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
