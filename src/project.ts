import { type TodoItem } from "./types/index";

class Project {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;
  #todos: TodoItem[];

  constructor(project: {
    title: string;
    description: string;
    dueDate: string;
    todos?: TodoItem[];
  }) {
    this.id = crypto.randomUUID();
    this.title = project.title;
    this.description = project.description;
    this.dueDate = new Date(project.dueDate).toISOString();
    this.createdAt = new Date(Date.now()).toISOString();
    this.#todos = project.todos ?? [];
  }

  getTodos() {
    return this.#todos;
  }

  addTodo(todoItem: TodoItem) {
    this.#todos.push(todoItem);
  }

  removeTodo(id: string) {
    this.#todos = this.#todos.filter((todo) => todo.id !== id);
  }
}

export default Project;
