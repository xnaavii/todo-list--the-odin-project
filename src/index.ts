import App from "./app";
import { ProjectItem } from "./types";
import StorageService from "./storage-service";

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: "project-1",
    title: "Housemates App",
    description: "An app where tenants can share choers etc.",
    dueDate: new Date("11/20/2026").toISOString(),
    createdAt: new Date().toISOString(),
    todos: [
      {
        id: "todo-1",
        title: "Create a wireframe",
        description:
          "Create wireframe so that you can better visualize the product",
        priority: "low",
        notes: "",
        checklist: [],
        isCompleted: false,
        dueDate: new Date("11/20/2026").toISOString(),
        createdAt: new Date().toISOString(),
      },
    ],
  },
];

const storageService = new StorageService();

const savedData = storageService.load("projects");
const initialProjects = savedData ? JSON.parse(savedData) : DEFAULT_PROJECTS;

if (!savedData) {
  storageService.save("projects", JSON.stringify(DEFAULT_PROJECTS));
}

const app = new App(storageService, initialProjects);

console.log(app.getProjects());
