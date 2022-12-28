import "./App.css";
import React from "react";
import Menus from "./components/Menus";
import store from "./store";
import { Provider } from "react-redux";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <Provider store={store}>
      <Menus />
      <ListTodo />
    </Provider>
  );
}

export default App;
