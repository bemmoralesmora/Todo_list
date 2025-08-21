import { itemTarea } from "../../module/itemTarea/itemTarea.js";

export function tareasComponent(tareasdb) {
  let tareas = document.createElement("div");
  tareas.className = "tareas-component";

  tareasdb.forEach((tarea, index) => {
    let item = itemTarea(
      index + 1,
      tarea.nombre,
      tarea.estado_tarea,
      tarea.fecha_asignada,
      tarea.fecha_entrega
    );
    tareas.appendChild(item);
  });

  return tareas;
}
