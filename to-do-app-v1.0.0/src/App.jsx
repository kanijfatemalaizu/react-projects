import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
// import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "04/07/2024",
    },
    {
      name: "Buy milk",
      dueDate: "04/07/2024",
    },
    {
      name: "Shopping",
      dueDate: "14/03/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
