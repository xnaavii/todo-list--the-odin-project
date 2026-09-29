import App from "./app";
import { ProjectItem } from "./types";

const DEFAULT_PROJECT: ProjectItem = {
  id: crypto.randomUUID(),
  title: "Housemates App",
  description: "An app where tenants can share choers etc.",
  dueDate: "11/20/2026",
  createdAt: "09/20/2026",
  todos: [
    {
      id: crypto.randomUUID(),
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
};

const app = new App();
app.addProject(DEFAULT_PROJECT);

console.log(app.getProjects()[0]);
