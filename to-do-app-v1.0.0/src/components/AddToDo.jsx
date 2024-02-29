import React from "react";

const AddToDo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter to do here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success w-100 ">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToDo;
