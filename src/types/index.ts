type Priority = "high" | "medium" | "low";

type TodoItem = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  notes: string;
  checklist: CheckListItem[];
  isCompleted: boolean;
  dueDate: Date;
  createdAt: Date;
};

type CheckListItem = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type Project = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;
  todos: TodoItem[];
};

export { type Priority, TodoItem, CheckListItem, Project };
