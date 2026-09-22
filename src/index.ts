import Project from "./project";
import { format } from "date-fns";

// Project details
const housematesProject = new Project({
  title: "Housemates App",
  description: "This housemates project is going to be fire",
  dueDate: "11/20/2026",
});

console.log(format(housematesProject.getDetails().dueDate, "MM/dd/yyyy"));
