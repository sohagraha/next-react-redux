import { Middleware } from "@reduxjs/toolkit";

const myLogger: Middleware = (store) => (next) => (action) => {
  console.log("dispatching ===>", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};
export default myLogger;
