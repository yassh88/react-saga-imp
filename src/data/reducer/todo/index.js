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
      return {
        loading: action.payload,
      };
    },
    setData: (state, action) => {
      return {
        todos: action.payload,
      };
    },
  },
});
export default todoSlice;
