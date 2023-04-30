import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/searchSlice';
import { useForm } from 'react-hook-form';
import classes from './search.module.scss';

const Search = () => {
  const { textSearch } = useAppSelector((state) => state.searchReducer);
  const { saveSearch } = searchSlice.actions;
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      text: textSearch,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const submit = (d: { text: string }) => {
    dispatch(saveSearch(d.text));
  };

  return (
    <form className={classes.search} onSubmit={handleSubmit(submit)}>
      <input id="search" placeholder="Введите текст" type="text" {...register('text')} />
      <input type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
