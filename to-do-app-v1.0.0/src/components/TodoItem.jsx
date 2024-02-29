import React from "react";

const TodoItem = ({ TodoName, TodoDate }) => {
  return (
    <div>
      <div className="row my-4">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
