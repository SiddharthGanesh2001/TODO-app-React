import { TaskCollection } from "./App";
import TaskBox from "./TaskBox";
export default function AddTask({ onSubmit }) {

  function handleEnter(event) {
    let taskName = document.querySelector("#addTaskBox").value;
    if(event.code === 'Enter') {
      onSubmit(taskName);
      TaskBox();
    }
  }

  return(
    <div id="addTask">    
        <input type="text" name="addTask" placeholder="Add a task" id="addTaskBox" autoComplete="off" onKeyDown={handleEnter}/>
        <br/><br/>
    </div>
  )
}
  