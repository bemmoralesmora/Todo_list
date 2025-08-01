import { itemTarea } from "../../module/itemTarea/itemTarea.js";

export function tareasComponent(tareasdb) {
  let tareas = document.createElement("div");
  tareas.className = "tareas-component";

  tareasdb.forEach((tarea) => {
    let item = itemTarea(
      tarea.id,
      tarea.title,
      tarea.estado,
      tarea.fecha,
      tarea.segundaFecha,
      tarea.integrantes
    );
    tareas.appendChild(item);
  });

  return tareas;
}
