import { configureStore } from '@reduxjs/toolkit';
import attendeesReducer from './attendeesSlice';
import pageReducer from "./pageNameSlice";

const store = configureStore({
  reducer: {
    attendees: attendeesReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
