import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isLoading: false,
  },
  reducers: {
    fetchData: (state, action) => {
      state.isLoading = action.payload;
      return state;
    },
    setData: (state, action) => {
      state.posts = action.payload;
      return state;
    },
  },
});
export default postSlice;
