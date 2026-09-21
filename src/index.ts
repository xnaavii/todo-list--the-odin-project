const person = {
  name: "John Smith",
  sayHello: () => `Hello! My name is ${person.name.split(" ")[0]}`,
};

const component = () => {
  const element = document.createElement("h1");

  element.textContent = "Hello There";

  return element;
};

console.log(person.sayHello());
document.body.append(component());
