import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/reducers/searchSlice';
import formReducer from '../store/reducers/formSlice';

const rootReducer = combineReducers({
  searchReducer,
  formReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
