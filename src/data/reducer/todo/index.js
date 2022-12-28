import { createSlice, createAction } from "@reduxjs/toolkit";
export const todo = createAction("fetchTodo");
console.log("todo", todo);
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    loading: false,
  },
  reducers: {
    fetchData: (state, action) => {
      console.log("action", action.payload);
      state.loading = action.payload;
      return state;
    },
    setData: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
      return state;
    },
  },
});
export default todoSlice;
