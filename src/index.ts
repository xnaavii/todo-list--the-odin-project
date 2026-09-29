import App from "./app";
import { ProjectItem } from "./types";

const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Housemates App",
    description: "An app where tenants can share choers etc.",
    dueDate: new Date("11/20/2026").toISOString(),
    createdAt: new Date().toISOString(),
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
  },
];

const app = new App(DEFAULT_PROJECTS);
console.log(app.getProjects());
