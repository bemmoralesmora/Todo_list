export function itemTarea(
  indice,
  nombre,
  estado_tarea,
  fecha_asignada,
  fecha_entrega,
  integrantes
) {
  let item = document.createElement("div");
  item.className = "item-tarea";

  let numero = document.createElement("div");
  numero.className = "numero";
  numero.textContent = indice;
  item.appendChild(numero);

  let titulo = document.createElement("div");
  titulo.className = "titulo";
  titulo.textContent = nombre;
  item.appendChild(titulo);

  let estadoTareas = document.createElement("div");
  estadoTareas.className = "estado";
  estadoTareas.textContent = estado_tarea;
  item.appendChild(estadoTareas);

  let fechaTarea = document.createElement("span");
  fechaTarea.className = "fechaTarea";
  fechaTarea.textContent = fecha_asignada
    ? new Date(fecha_asignada).toLocaleDateString()
    : "N/A";
  item.appendChild(fechaTarea);

  let segundaFechaTarea = document.createElement("span");
  segundaFechaTarea.className = "segunda-fecha";
  segundaFechaTarea.textContent = fecha_entrega
    ? new Date(fecha_entrega).toLocaleDateString()
    : "N/A";
  item.appendChild(segundaFechaTarea);

  let listaIntegrantesTarea = document.createElement("span");
  listaIntegrantesTarea.className = "lista-integrante";
  listaIntegrantesTarea.textContent = integrantes;
  item.appendChild(listaIntegrantesTarea);

  let botonEliminar = document.createElement("button");
  botonEliminar.className = "boton-eliminar";
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
      item.remove();
    }
  });
  item.appendChild(botonEliminar);

  return item;
}
