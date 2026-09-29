import { type ProjectItem } from "./types";
import StorageService from "./storage-service";

class App {
  #projects: ProjectItem[] = [];
  #storage: StorageService;

  constructor(
    storageController: StorageService,
    defaultProjects?: ProjectItem[],
  ) {
    this.#storage = storageController;
    this.#projects = defaultProjects ?? [];
  }

  getProjects() {
    const data = this.#storage.load("projects");
    if (!data) {
      this.#storage.save("projects", JSON.stringify(this.#projects));
      return this.#projects;
    }
    return JSON.parse(data);
  }

  addProject(project: ProjectItem) {
    this.#projects.push(project);
    this.saveProjects();
  }

  removeProject(id: string) {
    this.#projects = this.#projects.filter((project) => project.id !== id);
    this.saveProjects();
  }

  saveProjects() {
    this.#storage.save("projects", JSON.stringify(this.#projects));
  }

  loadProjects() {
    this.#projects = JSON.parse(this.#storage.load("projects") ?? "[]");
  }
}

export default App;
