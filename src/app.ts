import { type Project } from "./types/index";

class App {
  #projects: Project[] = [];

  getProjects() {
    return this.#projects;
  }
}

export default App;
