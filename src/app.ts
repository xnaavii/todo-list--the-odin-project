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

  removeProject(id: string) {
    this.#projects = this.#projects.filter((project) => project.id !== id);
  }
}

export default App;
