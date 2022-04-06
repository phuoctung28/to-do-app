import React, {useState, useEffect} from "react";

export const TodoItem = ({ todo, onUpdateStatus }) => {
  const { id, content, isCompleted } = todo;
  const [classes, setClasses] = useState("todo-item");
  useEffect(() => {
    console.log(isCompleted);
    if (todo.isCompleted) {
      setClasses(`todo-item done`)
    } else setClasses(`todo-item`)
  }, [todo.isCompleted]);
  
  return (
    <div className={classes}>
      <p>{content}</p>
      <i className="fa fa-check-circle" onClick={() => onUpdateStatus(id)}></i>
    </div>
  );
};
