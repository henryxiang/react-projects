export default class Todo {
  constructor(task, completed = false) {
    this.id = Math.floor(Math.random()*1000000);
    this.task = task;
    this.completed = completed;
  }
}