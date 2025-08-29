import { itemTarea } from "../../module/itemTarea/itemTarea.js";
import { informacionComponent } from "../infomacionComponent/informacionComponent.js";
export function tareasComponent(tareasdb, section) {
  let tareas = document.createElement("div");
  tareas.className = "tareas-component";

  tareasdb.forEach((tarea, index) => {
    let item = itemTarea(
      index + 1,
      tarea.nombre,
      tarea.estado_tarea,
      tarea.fecha_asignada,
      tarea.fecha_entrega,
      tarea.integrantes // 👈 importante pasar integrantes
    );

    // Evento para mostrar info al hacer click
    item.addEventListener("click", () => {
      let oldInfo = section.querySelector(".informacion-component");
      if (oldInfo) oldInfo.remove();
      section.appendChild(informacionComponent(tarea));
    });

    tareas.appendChild(item);
  });

  return tareas;
}
