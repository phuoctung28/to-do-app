import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const AddTodo = ({ onAddNewTodo }) => {
  const [content, setContent] = useState("");
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      content: content,
      isCompleted: false,
    };
    onAddNewTodo(newTodo);
    setContent("");
  };
  return (
    <div className="addTodo-container">
      <h4>ADD ITEM</h4>
      <div className="add-item-input">
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                name="content"
                aria-describedby="helpId"
                value={content}
                placeholder="Add new todo"
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
