import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Create React App", important: false, id: 2 },
      { label: "Study Bible", important: true, id: 3 },
      { label: "Read book of Hemingway", important: false, id: 4 }
    ]
  };
  makeDelete = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArr = [...before, ...after];
      return {
        todoData: newArr
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.makeDelete} />
        <ItemAddForm />
      </div>
    );
  }
}
