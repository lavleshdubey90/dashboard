import { configureStore } from '@reduxjs/toolkit';
import attendeesReducer from './attendeesSlice';

const store = configureStore({
  reducer: {
    attendees: attendeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
