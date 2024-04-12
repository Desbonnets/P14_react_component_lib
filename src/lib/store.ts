import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './features/tableSlice';

export const generateStore = () => {
  return configureStore({
      reducer: {
        table: tableReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
  });
};
export type RootState = ReturnType<typeof generateStore>['getState'];
export type AppDispatch = ReturnType<typeof generateStore>['dispatch'];

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