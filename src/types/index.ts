export type Priority = "high" | "medium" | "low";

export type ChecklistItem = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TodoItem = {
  id: string;
  title: string;
  description: string;
  notes: string;
  priority: Priority;
  isCompleted: boolean;
  dueDate: string;
  createdAt: string;
  checklist?: ChecklistItem[];
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;
  todos?: TodoItem[];
};

type Generated = "id" | "createdAt";

export type TodoData = Omit<TodoItem, Generated> &
  Partial<Pick<TodoItem, Generated>>;

export type ProjectData = Omit<ProjectItem, Generated | "todos"> &
  Partial<Pick<ProjectItem, Generated>> & {
    todos?: TodoData[];
  };
