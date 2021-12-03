import { v4 as uuidv4 } from 'uuid';

class Todo {
  public id: string;
  public title: string;
  public completed: boolean;

  constructor(title: string, completed: boolean = false) {
    this.title = title;
    this.completed = completed;
    this.id = uuidv4();
  }
}

export default Todo;
