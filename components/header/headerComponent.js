export function headerComponent() {
  let headerComponent = document.createElement("header");
  headerComponent.className = "headerComponent";

  let title = document.createElement("h1");
  title.textContent = "Todo List";
  headerComponent.appendChild(title);

  let divTareas = document.createElement("div");
  divTareas.className = "div-tareas";
  divTareas.textContent = "Pendientes:";
  headerComponent.appendChild(divTareas);

  let numeroPendientes = document.createElement("span");
  numeroPendientes.className = "numero-pendientes";
  numeroPendientes.id = "contador-tareas";

  numeroPendientes.textContent = "0";
  divTareas.appendChild(numeroPendientes);

  let divUser = document.createElement("div");
  divUser.className = "div-user";
  headerComponent.appendChild(divUser);

  let userImage = document.createElement("img");
  userImage.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  userImage.className = "user-image";
  divUser.appendChild(userImage);

  return headerComponent;
}
