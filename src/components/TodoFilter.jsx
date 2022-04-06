import React, { useEffect, useState } from "react";

export const TodoFilter = ({ onFilterChange }) => {
  const [valueFilter, setValueFilter] = useState("");
  const onChangeHandler = (e) => {
    setValueFilter(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setValueFilter("")
  }
  useEffect(() => {
    if (valueFilter.length !== -1) {
      onFilterChange(valueFilter);
    }
    console.log(valueFilter);
  }, [valueFilter]);
  return (
    <div className="mb-5">
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              name="content"
              value={valueFilter}
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
