import React, { useState } from 'react';

import TodoList from './components/TodoList'; 

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
const deleteHandler=(indexValue)=>{
const newTodos=todos.filter((todo,index)=>index!==indexValue);
setTodos(newTodos)
}
  return (
    <div>
        <center>
      <div className="card">
        <div className="card-item">
          <h1 className="card-heading">Todos List Application</h1>
          <form onSubmit={submitHandler}>
            <input className='input-box' size="30" type="text" name="task" onChange={changeHandler} /> &nbsp;&nbsp;
            <input type="submit"className='submit-btn' value="Add" name="Add" />
          </form>
          <TodoList todolist={todos} deleteHandler={deleteHandler} />
        </div>
      </div>
      </center>
    </div>
  );
};

export default App;
