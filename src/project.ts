import Todo from "./todo";
import { ProjectData, ProjectItem } from "./types";

class Project {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;
  #todos: Todo[] = [];

  constructor(project: ProjectData) {
    this.id = project.id ?? crypto.randomUUID();
    this.title = project.title;
    this.description = project.description;
    this.dueDate = new Date(project.dueDate).toISOString();
    this.createdAt = project.createdAt ?? new Date().toISOString();
    this.#todos = (project.todos ?? []).map((todo) => new Todo(todo));
  }

  toJSON(): ProjectItem {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      createdAt: this.createdAt,
      todos: this.#todos.map((todo) => todo.toJSON()),
    };
  }

  getTodos() {
    return this.#todos;
  }

  addTodo(todo: Todo) {
    this.#todos.push(todo);
  }

  removeTodo(id: string) {
    this.#todos = this.#todos.filter((todo) => todo.id !== id);
  }
}

export default Project;
