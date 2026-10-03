import StorageService from "./storage-service";
import Project from "./project";
import Todo from "./todo";

class App {
  #projects: Project[] = [];
  #storage: StorageService;

  constructor(storageController: StorageService, defaultProjects?: Project[]) {
    this.#storage = storageController;
    const savedProjects = this.#storage.load("projects");
    if (savedProjects) {
      const rawProjects = JSON.parse(savedProjects);
      rawProjects.map((project: Project) => {
        this.#projects.push(
          new Project({
            ...project,
            todos: project.todos?.map((todo: Todo) => new Todo(todo)),
          }),
        );
      });
    } else {
      this.#projects = defaultProjects ?? [];
      this.saveProjects();
    }
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

  loadProjects() {
    this.#projects = JSON.parse(this.#storage.load("projects") ?? "[]");
  }
}

export default App;
