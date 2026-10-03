import StorageService from "./storage-service";
import Project from "./project";
import { type ProjectData } from "./types";

class App {
  #projects: Project[] = [];
  #storage: StorageService;

  constructor(storageController: StorageService, defaultProjects?: Project[]) {
    this.#storage = storageController;
    const loaded = this.loadProjects();

    if (!loaded) {
      this.#projects = defaultProjects ?? [];
      this.saveProjects();
    }
  }

  loadProjects(): boolean {
    const saved = this.#storage.load("projects");
    if (!saved) return false;

    const raw: ProjectData[] = JSON.parse(saved);
    this.#projects = raw.map((project) => new Project(project));
    return true;
  }

  getProjects(): Project[] {
    return this.#projects;
  }

  addProject(project: Project) {
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
}

export default App;
