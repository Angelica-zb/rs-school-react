import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IForms } from '../../interfaces/ICardInterfaces';

interface IFormsSlice {
  dataForm: Array<IForms>;
}

export const initialState: IFormsSlice = {
  dataForm: [],
};

export const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    saveForm(state, action: PayloadAction<IForms>) {
      state.dataForm = state.dataForm.concat(action.payload);
    },
  },
});

export default formSlice.reducer;
