import { type CheckListItem, type Priority } from "./types/index";

class Todo {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  notes: string;
  #checklist: CheckListItem[];
  isCompleted: boolean;
  dueDate: string;
  createdAt: string;

  constructor(todo: {
    title: string;
    description: string;
    priority: Priority;
    notes?: string;
    checklist?: CheckListItem[];
    isCompleted?: boolean;
    dueDate: string;
  }) {
    this.id = crypto.randomUUID();
    this.title = todo.title;
    this.description = todo.description;
    this.priority = todo.priority;
    this.notes = todo.notes ?? "";
    this.isCompleted = todo.isCompleted ?? false;
    this.#checklist = todo.checklist ?? [];
    this.dueDate = new Date(todo.dueDate).toISOString();
    this.createdAt = new Date(Date.now()).toISOString();
  }

  getCheckList() {
    return this.#checklist;
  }

  addCheckListItem(checkListItem: CheckListItem) {
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
