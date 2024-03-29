import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import { apiSlice } from './slices/api';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;