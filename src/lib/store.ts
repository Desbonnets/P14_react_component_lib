import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './features/tableSlice';

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

export default store;