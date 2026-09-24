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

export { type Priority, TodoItem, CheckListItem };
