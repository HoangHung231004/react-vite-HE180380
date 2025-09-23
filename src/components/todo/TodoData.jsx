const TodoData = (props) => {
    console.log("Check Props: ",  props);
  return (
    <div className="todo-data">
      <div className="data">Learning React</div>
      <div>My name is {props.name} </div>
    </div>
  );
};

export default TodoData;