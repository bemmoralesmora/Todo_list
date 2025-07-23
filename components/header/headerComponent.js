export function headerComponent() {
  let headerComponent = document.createElement("header");
  headerComponent.className = "headerComponent";

  let title = document.createElement("h1");
  title.textContent = "Todo List";
  headerComponent.appendChild(title);

  let divTareas = document.createElement("div");
  divTareas.className = "div-tareas";
  headerComponent.appendChild(divTareas);

  let divUser = document.createElement("div");
  divUser.className = "div-user";
  headerComponent.appendChild(divUser);

  return headerComponent;
}
