export default class TaskModel {
    constructor(name) {
      this.name = name;
      this.ID = Date.now();
      this.isComplete = false;
    }
  }