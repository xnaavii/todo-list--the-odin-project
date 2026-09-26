import Project from "./project";

// TODO: Create an option to create a project
class App {
  #projects: Project[] = [];

  getProjects() {
    return this.#projects;
  }
}

export default App;
