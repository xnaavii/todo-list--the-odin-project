import Project from "./project";

// TODO: Create an option to create a project
class App {
  #projects: Project[] = [];

  getProjects() {
    return this.#projects;
  }

  addProject(projectDetails: {
    title: string;
    description: string;
    dueDate: string;
  }) {
    this.#projects.push(new Project(projectDetails));
  }
}

export default App;
