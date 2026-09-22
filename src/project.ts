class Project {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;
  todos: [];

  constructor(projectDetails: {
    title: string;
    description: string;
    dueDate: string;
    todos?: [];
  }) {
    this.id = crypto.randomUUID();
    this.title = projectDetails.title;
    this.description = projectDetails.description;
    this.dueDate = new Date(projectDetails.dueDate).toISOString();
    this.createdAt = new Date(Date.now()).toISOString();
    this.todos = projectDetails.todos ?? [];
  }

  getDetails(this: Project) {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      createdAt: this.createdAt,
    };
  }
}

export default Project;
