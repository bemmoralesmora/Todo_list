import { itemTarea } from "../../module/itemTarea/itemTarea.js";

let tareasdb = [
  {
    id: 1,
    title: "Tarea 1",
    estado: "Pendiente",
    fecha: "2023-10-01",
    segundaFecha: "2023-10-15",
    integrantes: "Juan, Maria",
  },
  {
    id: 2,
    title: "Tarea 2",
    estado: "En Progreso",
    fecha: "2023-10-02",
    segundaFecha: "2023-10-16",
    integrantes: "Pedro, Ana",
  },
];

export function tareasComponent() {
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
