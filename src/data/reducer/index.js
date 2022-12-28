import { createSlice } from "@reduxjs/toolkit";
import todoSlice from "./todo";
import postSlice from "./post";

const reducers = {
  todo: todoSlice.reducer,
  post: postSlice.reducer,
};
export default reducers;
