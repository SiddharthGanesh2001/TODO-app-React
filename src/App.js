import React from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskBox from "./TaskBox";
import TaskBoxStatus from "./TaskBoxStatus";
import TaskCollection from "./TaskCollection";
import { useState } from "react";


function App() {
  let collection = TaskCollection.getInstance();
  const [collectionStore, setCollectionStore] = useState([...collection.getAllTasks()]);
  function handleTaskAdd(taskName) {
    collection.add(taskName);
    setCollectionStore([...collection.getAllTasks()]);
  }
  function checkTask(taskID) {
    collection.update(taskID);
  }
  function removeTask(taskID) {
    collection.remove(taskID);
    setCollectionStore([...collection.getAllTasks()]);
  }
  function clearCompleted(){
    let removeIDs = collection.removeCompleted();
    collection.remove(...removeIDs);
    setCollectionStore([...collection.getAllTasks()]);
  }

  return (
    <div id="wrapper">
      <Header/>
      <br/><br/>
      <AddTask onSubmit={handleTaskAdd}/>
      <br/><br/> 
      <TaskBox 
        todoList={collectionStore}
        onCheck={checkTask}
        onRemove={removeTask}
      />
      <TaskBoxStatus
        onClearCompleted={clearCompleted}
      />
    </div>
  )
}

export default App;
