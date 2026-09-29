import Project from "./project";
import { type ProjectItem } from "./types";

class App {
  #projects: ProjectItem[] = [];

  getProjects() {
    return this.#projects;
  }

  addProject(projectDetails: ProjectItem) {
    this.#projects.push(new Project(projectDetails));
  }
}

export default App;
