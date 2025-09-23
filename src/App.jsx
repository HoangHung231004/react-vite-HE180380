import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  const hoidanit = "eric";
const data = {
  address : "hanoi",
  country: "vietnam"
}
  return (
    <div className="todo-container">
      <div className="todo-title">To Do List</div>
      <TodoNew />
      <TodoData 
      name={hoidanit}
      data={data} 
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
