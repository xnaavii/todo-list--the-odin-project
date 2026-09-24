import { type TodoItem } from "./types/index";

class Project {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;
  #todos: TodoItem[];

  constructor(projectDetails: {
    title: string;
    description: string;
    dueDate: string;
    todos?: TodoItem[];
  }) {
    this.id = crypto.randomUUID();
    this.title = projectDetails.title;
    this.description = projectDetails.description;
    this.dueDate = new Date(projectDetails.dueDate).toISOString();
    this.createdAt = new Date(Date.now()).toISOString();
    this.#todos = projectDetails.todos ?? [];
  }

  getTodos() {
    return this.#todos;
  }

  addTodo(todoItem: TodoItem) {
    this.#todos.push(todoItem);
  }
}

export default Project;
