import { useState } from "react";
export default function AddTask({ onSubmit }) {
  const [taskName, setTaskName] = useState("");
  
  function handleChange(event) {
    setTaskName(event.target.value);
  }
  function handleEnter(event) {
    if(event.code === 'Enter') {
      onSubmit(taskName);
      setTaskName("");
    }
  }

  return(
    <div id="addTask">    
        <input type="text" name="addTask" placeholder="Add a task" id="addTaskBox" autoComplete="off" value={taskName} onChange={handleChange} onKeyDown={handleEnter}/>
        <br/><br/>
    </div>
  )
}
  