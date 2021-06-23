import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodo";

const App = () => {
  return (
    <div className="tmaticui">
      <h1>My Todo List</h1>
      <AddTodo />
      <DisplayTodos />
    </div>
  );
};

export default App;
