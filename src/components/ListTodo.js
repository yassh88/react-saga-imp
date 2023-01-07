import React from "react";
import { useDispatch, useSelector } from "react-redux";
import todoSlice from "../data/reducer/todo";
import postSlice from "../data/reducer/post";

export default function() {
  const dispatch = useDispatch();
  const todos = useSelector((state) =>
    state.todo.todos ? state.todo.todos : []
  );

  const posts = useSelector((state) =>
    state.post.posts ? state.post.posts : []
  );

  console.log(todoSlice.actions.fetchData().type);

  const renderList = () => {
    return todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  };

  const renderPostsList = () => {
    return posts.map((post) => {
      return <p key={post.id}>{post.title}</p>;
    });
  };

  return (
    <div style={{ display: "flex", "justify-content": "space-around" }}>
      <div>
        <button onClick={() => dispatch(todoSlice.actions.fetchData(true))}>
          Get Todo
        </button>
        {renderList()}
      </div>
      <div>
        <button onClick={() => dispatch(postSlice.actions.fetchData(true))}>
          Get Post
        </button>
        {renderPostsList()}
      </div>
    </div>
  );
}
