class Project {
  id: string | number;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;

  constructor(title: string, description: string, dueDate: string) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = Date.parse(dueDate).toString();
    this.createdAt = Date.now().toString();
  }
}

const newProject = new Project(
  "Workout",
  "This is really good project",
  "04 September 2026",
);
console.log(newProject);

export default Project;
