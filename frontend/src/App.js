import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`submitted task: ${task}`)

  }
  return (
    <div className="App">
      <h1>Todo List</h1> 
      <form onSubmit={handleSubmit} data-testid="form-element">
        <input onChange={(e) => setTask(e.target.value)} type="text" value={task} placeholder="Enter a task..." data-testid="form-input" />
        <input type="submit" value="Add" data-testid="form-submit" />
      </form>
      <div data-testid="task-element">{task}</div>
    </div>
  );
}

export default App;
