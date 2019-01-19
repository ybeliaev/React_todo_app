import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ToDoList from "./components/todo-list";

import "./styles.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Create React App", important: false, id: 2 },
    { label: "Study Bible", important: true, id: 3 },
    { label: "Read book of Hemingway", important: false, id: 4 }
  ];
  return (
    <div className="App">
      <AppHeader />
      <SearchPanel />
      <ToDoList todos={todoData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
