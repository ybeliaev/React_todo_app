import React from "react";

import ToDoListItem from "./todo-list-item";

const ToDoList = ({ todos }) => {
  const elements = todos.map(item => {
    console.log({ ...item });
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <ToDoListItem {...itemProps} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default ToDoList;
