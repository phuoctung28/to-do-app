import React, { useState } from "react";

export const TodoFilter = () => {
  const [valueFilter, setValueFilter] = useState("");
  const onChangeHandler = (e) => {
    setValueFilter();
  };
  return (
    <div className="mb-5">
      <form >
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              name="content"
              aria-describedby="helpId"
              placeholder="Filter you task"
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary">
              CLEAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
