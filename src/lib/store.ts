import { configureStore, Store } from '@reduxjs/toolkit';
import tableReducer from './features/tableSlice';

let store: Store;

export const generateStore = (): Store => {
  store = configureStore({
    reducer: {
      table: tableReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  return store;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/*
const store = configureStore({
    reducer: {
        table: tableReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;*/