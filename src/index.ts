import App from "./app";
import StorageService from "./storage-service";
import Project from "./project";
import Todo from "./todo";

const DEFAULT_PROJECTS: Project[] = [
  new Project({
    title: "Housemates App",
    description: "An app where tenants can share choers etc.",
    dueDate: new Date("11/20/2026").toISOString(),
    todos: [
      new Todo({
        title: "Create a wireframe",
        description:
          "Create wireframe so that you can better visualize the product",
        priority: "low",
        notes: "",
        isCompleted: false,
        dueDate: new Date("11/20/2026").toISOString(),
      }),
    ],
  }),
];

const storageService = new StorageService();
const app = new App(storageService, DEFAULT_PROJECTS);

console.log(app.getProjects());
