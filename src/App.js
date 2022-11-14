import React from "react";
function RenderData() {
  return (
    <div>
      <Header/>
      <br/><br/>
      <AddTask/>
      <br/><br/>
      <TaskBox/>      
      <TaskBoxStatus/>
    </div>
  )
}
function Header() {
  return (
    <h1>
      TODO
    </h1>
  )
}
function AddTask() {
  return(
    <div id="addTask">    
        <input type="text" name="addTask" placeholder="Add a task" id="addTaskBox" autoComplete="off"/>
        <input type="button" value="Add" id="add"/>    
    </div>
  )
}

function TaskBox() {
  return (
    <div id="taskBox">
    </div>
  )
}

function TaskBoxStatus() {
  return (
    <div id="taskBoxStatus">
        <button id="clearCompleted">Clear Completed</button>
    </div>
  )
}

function App() {
  
  return <RenderData/>;
}
export default App;
