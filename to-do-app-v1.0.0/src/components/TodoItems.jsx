import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="container items-container">
        {todoItems.map((item) => (
          <TodoItem TodoName={item.name} TodoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
