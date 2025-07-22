function DOM() {
  let DOM = document.querySelector("#root");
  DOM.className = "DOM";

  let titulo = document.createElement("h1");
  titulo.className = "titulo";
  titulo.textContent = "ESTAMOS TRABAJANDO";
  DOM.appendChild(titulo);

  return DOM;
}

DOM();
