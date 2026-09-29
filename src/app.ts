import { type ProjectItem } from "./types";

class App {
  #projects: ProjectItem[] = [];

  constructor(projects?: ProjectItem[]) {
    this.#projects = projects ?? [];
  }

  getProjects() {
    return this.#projects;
  }

  addProject(project: ProjectItem) {
    this.#projects.push(project);
  }
}

export default App;
