import React, { useState, useEffect } from "react";
import "./TodoApp.css";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { TodoFilter } from "./TodoFilter";
export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const onAddNewTodo = (todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };
  const onUpdateStatus = (id) => {
    const tmpTodos = todos;
    const idx = tmpTodos.findIndex((todo) => todo.id === id);
    const currentStatus = tmpTodos[idx]["isCompleted"];
    tmpTodos[idx]["isCompleted"] = !currentStatus; //toggle
    setTodos(tmpTodos);
  };

  const onFilterChange = (filterValued) => {
    setFilterValue(filterValued);
  };
  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <TodoFilter onFilterChange={onFilterChange} />
        <TodoList
          todos={todos}
          onUpdateStatus={onUpdateStatus}
          filterValue={filterValue}
        />
        <AddTodo onAddNewTodo={onAddNewTodo} />
      </div>
    </div>
  );
};
