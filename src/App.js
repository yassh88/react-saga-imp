import "./App.css";
import React from "react";
import Menus from "./components/Menus";
import store from "./store";
import { Provider } from "react-redux";
import ListTodo from "./components/ListTodo";
import CoustomHookArray from "./components/CoustomHookArray";
import AutoComplete from "./components/autocomplete";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <Provider store={store}>
      <Menus />
      <ListTodo />
      <CoustomHookArray />
      <AutoComplete />
      <MyComponent />
    </Provider>
  );
}

export default App;
