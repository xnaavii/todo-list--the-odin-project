import App from "./app";
import Project from "./project";
import { format } from "date-fns";

const app = new App();
console.log(app.getProjects());

// Project details
const housematesProject = new Project({
  title: "Housemates App",
  description: "This housemates project is going to be fire",
  dueDate: "11/20/2026",
});

console.log(housematesProject.getTodos());
console.log(format(housematesProject.dueDate, "MM/dd/yyyy"));
