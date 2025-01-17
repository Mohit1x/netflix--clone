import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MoviesReducer from "./MoviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: MoviesReducer,
  },
});

export default appStore;
