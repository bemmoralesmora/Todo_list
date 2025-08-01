export function itemTarea(
  indice,
  title,
  estado,
  fecha,
  segundaFecha,
  listaIntegrante
) {
  let item = document.createElement("div");
  item.className = "item-tarea";

  let numero = document.createElement("div");
  numero.className = "numero";
  numero.textContent = indice;
  item.appendChild(numero);

  let titulo = document.createElement("div");
  titulo.className = "titulo";
  titulo.textContent = title;
  item.appendChild(titulo);

  let estadoTareas = document.createElement("div");
  estadoTareas.className = "estado";
  estadoTareas.textContent = estado;
  item.appendChild(estadoTareas);

  let fechaTarea = document.createElement("span");
  fechaTarea.className = "fechaTarea";
  fechaTarea.textContent = fecha;
  item.appendChild(fechaTarea);

  let segundaFechaTarea = document.createElement("span");
  segundaFechaTarea.className = "segunda-fecha";
  segundaFechaTarea.textContent = segundaFecha;
  item.appendChild(segundaFechaTarea);

  let listaIntegrantesTarea = document.createElement("span");
  listaIntegrantesTarea.className = "lista-integrante";
  listaIntegrantesTarea.textContent = listaIntegrante;
  item.appendChild(listaIntegrantesTarea);

  let botonEliminar = document.createElement("button");
  botonEliminar.className = "boton-eliminar";
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", () => {
    item.remove();
  });
  item.appendChild(botonEliminar);

  return item;
}
