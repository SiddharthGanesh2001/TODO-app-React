import React from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskBox from "./TaskBox";
import TaskBoxStatus from "./TaskBoxStatus";

function App() {
  
  return (
    <div id="wrapper">
      <Header/>
      <br/><br/>
      <AddTask/>
      <br/><br/>
      <TaskBox/>      
      <TaskBoxStatus/>
    </div>
  )
}

class TaskModel {
  constructor(name) {
    this.name = name;
    this.ID = Date.now();
    this.status = "PENDING";
  }
}

class TaskCollection {
  constructor() {
    this.taskCollection = [];
  }
  add(name) {
    this.taskCollection.push(new TaskModel(name));
  }
  remove(...IDs) {
    for(let ID of IDs) {
      for(let i = 0; i < this.taskCollection.length; i++) {
        if(this.taskCollection[i].ID === ID) {
          this.taskCollection.splice(i,1);
        }
      }
    }
  }
}

export default App;
