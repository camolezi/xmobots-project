import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./Slices/loginSlice.js";
import airportReducer from "./Slices/airportSlice.js";

export default configureStore({
  reducer: {
    login: loginReducer,
    airport: airportReducer,
  },
});
