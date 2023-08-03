import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counter/CounterSlice";
import logger from "redux-logger";
import myLogger from "./middlewares/logger";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([logger, myLogger]);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
