import React from "react";

export const TodoItem = ({ todo, onUpdateStatus }) => {
  const { id, content, isCompleted } = todo;
  const classes = isCompleted ? `todo-item done` : `todo-item`;
  return (
    <div className={classes}>
      <p>{content}</p>
      <i className="fa fa-check-circle" onClick={() => onUpdateStatus(id)}></i>
    </div>
  );
};
