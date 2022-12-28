import { createSlice, createAction } from "@reduxjs/toolkit";
export const todo = createAction("fetchTodo");
console.log("todo", todo);
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        posts: action.payload,
      };
    },
  },
});
export default postSlice;
