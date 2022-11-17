import TaskModel from "./TaskModel";
export default class TaskCollection {
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
      for(const taskID of IDs) {
        for(let i = 0; i < this.store.length; i++) {
          if(this.store[i].ID === taskID) {
            this.store.splice(i,1);
          }
        }
      }
      
    }
    removeCompleted(){
      let removeIDs = [];
      for(const taskModel of this.store) {
        if(taskModel.isComplete === true) {
          removeIDs.push(taskModel.ID);
        }
      }
      return removeIDs;
    }
    update(taskID) {
      for(const taskModel of this.store) {
        if(taskModel.ID === taskID) {
          taskModel.isComplete=!taskModel.isComplete;
        }
      }
    }

    getAllTasks() {
        return this.store
    }
}

  