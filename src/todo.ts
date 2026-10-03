import {
  TodoData,
  TodoItem,
  type ChecklistItem,
  type Priority,
} from "./types/index";

class Todo {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  notes: string;
  #checklist: ChecklistItem[];
  isCompleted: boolean;
  dueDate: string;
  createdAt: string;

  constructor(todo: TodoData) {
    this.id = todo.id ?? crypto.randomUUID();
    this.title = todo.title;
    this.description = todo.description;
    this.priority = todo.priority;
    this.notes = todo.notes ?? "";
    this.isCompleted = todo.isCompleted ?? false;
    this.#checklist = todo.checklist ?? [];
    this.dueDate = new Date(todo.dueDate).toISOString();
    this.createdAt = todo.createdAt ?? new Date().toISOString();
  }

  toJSON(): TodoItem {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      priority: this.priority,
      notes: this.notes,
      isCompleted: this.isCompleted,
      dueDate: this.dueDate,
      createdAt: this.createdAt,
      checklist: this.#checklist,
    };
  }

  getCheckList() {
    return this.#checklist;
  }

  addCheckListItem(checkListItem: ChecklistItem) {
    this.#checklist.push(checkListItem);
  }

  removeCheckListItem(id: string) {
    this.#checklist = this.#checklist.filter((item) => item.id !== id);
  }

  markComplete() {
    this.isCompleted = true;
  }
}

export default Todo;
