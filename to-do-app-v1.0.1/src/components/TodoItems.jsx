import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className="container items-container">
        {todoItems.map((item) => (
          <TodoItem
            TodoName={item.name}
            TodoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
