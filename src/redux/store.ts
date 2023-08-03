import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counter/CounterSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
