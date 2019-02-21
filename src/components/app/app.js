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
    ],
    term: "",
    filter: "active"
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
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }
  makeToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  makeToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };
  search(items, term) {
    return items.filter(elem => {
      if (term === 0) {
        return items;
      }
      return elem.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
  makeSearch = term => {
    this.setState({ term });
  };
  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(elem => !elem.done);
      case "done":
        return items.filter(elem => elem.done);
      default:
        return items;
    }
  }
  render() {
    const { todoData, term } = this.state; // term - искомый элемент
    const visibleItem = this.search(todoData, term);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel makeSearchChange={this.makeSearch} />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={visibleItem}
          onDeleted={this.makeDelete}
          onToggleImportant={this.makeToggleImportant}
          onToggleDone={this.makeToggleDone}
        />
        <ItemAddForm onAddItem={this.makeNewItem} />
      </div>
    );
  }
}
