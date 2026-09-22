class Project {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;

  constructor({
    title,
    description,
    dueDate,
  }: {
    title: string;
    description: string;
    dueDate: string;
  }) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate).toISOString();
    this.createdAt = new Date(Date.now()).toISOString();
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
