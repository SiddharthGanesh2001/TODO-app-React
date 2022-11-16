import React from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskBox from "./TaskBox";
import TaskBoxStatus from "./TaskBoxStatus";

function App() {
  function handleTaskAdd(taskName) {
    let task = TaskCollection.getInstance();
    task.add(taskName);
    console.log(task);
  }

  return (
    <div id="wrapper">
      <Header/>
      <br/><br/>
      <AddTask onSubmit={handleTaskAdd}/>
      <br/><br/> 
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

export class TaskCollection {
  static instance = null;
  constructor() {
    this.store = [];
  }
  static getInstance() {
    if(this.instance === null) {
      this.instance = new TaskCollection();      
    }
    return this.instance;
  }

  add(name) {
    this.store.push(new TaskModel(name));
  }
  remove(...IDs) {
    for(let ID of IDs) {
      for(let i = 0; i < this.store.length; i++) {
        if(this.store[i].ID === ID) {
          this.store.splice(i,1);
        }
      }
    }
  }
  getTaskModel(taskModel) {
    return this.store[taskModel];
  }
  // getID() {
  //   for(let taskModel of this.getInstance) {
  //     return taskModel.ID;
  //   }
  // }
}



export default App;
