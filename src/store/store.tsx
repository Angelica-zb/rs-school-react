import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/reducers/searchSlice';
import formReducer from '../store/reducers/formSlice';
import { dataApi } from './reducers/apiSlice';

const rootReducer = combineReducers({
  searchReducer,
  formReducer,
  [dataApi.reducerPath]: dataApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
