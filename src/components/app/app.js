import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Create React App"),
      this.createTodoItem("Study Bible"),
      this.createTodoItem("Read book of Hemingway")
    ]
  };
  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    };
  }
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
  makeNewItem = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  };
  makeToggleImportant = id => {
    console.log("Toggle important", id);
  };
  makeToggleDone = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        done: !oldItem.done
      };
      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];
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
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.makeDelete}
          onToggleImportant={this.makeToggleImportant}
          onToggleDone={this.makeToggleDone}
        />
        <ItemAddForm onAddItem={this.makeNewItem} />
      </div>
    );
  }
}
