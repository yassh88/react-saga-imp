import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../data/action/todo";
import todoSlice from "../data/reducer/todo";

export default function() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  console.log(todoSlice.actions.fetchData().type);

  const renderList = () => {
    return todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  };

  return (
    <div>
      <button onClick={() => dispatch(todoSlice.actions.fetchData(true))}>
        Getdata
      </button>
      {renderList()}
    </div>
  );
}
