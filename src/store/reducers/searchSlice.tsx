import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISearch {
  textSearch: string;
  isLoading: boolean;
}

export const initialState: ISearch = {
  textSearch: '',
  isLoading: true,
};

export const searchSlice = createSlice({
  name: 'textSearch',
  initialState,
  reducers: {
    saveSearch(state, action: PayloadAction<string>) {
      state.textSearch = action.payload;
    },
    handleLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default searchSlice.reducer;
