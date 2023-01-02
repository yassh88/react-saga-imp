import "./App.css";
import React from "react";
import Menus from "./components/Menus";
import store from "./store";
import { Provider } from "react-redux";
import ListTodo from "./components/ListTodo";
import CoustomHookArray from "./components/CoustomHookArray";

function App() {
  return (
    <Provider store={store}>
      <Menus />
      <ListTodo />
      <CoustomHookArray />
    </Provider>
  );
}

export default App;
