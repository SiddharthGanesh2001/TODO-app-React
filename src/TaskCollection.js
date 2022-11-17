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
    getAllTasks() {
        return this.store
    }
    getTaskModelByID(taskID) {
        for(let taskModel of this.store) {
            if(taskModel.ID === taskID) {
                return taskModel;
            }
        }
    }
    // getID() {
    //   for(let taskModel of this.getInstance) {
    //     return taskModel.ID;
    //   }
    // }
}

  