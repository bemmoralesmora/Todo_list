import { formulario } from "../formularioComponent/formularioComponent.js";

export function informacionComponent(tarea) {
  let informacion = document.createElement("div");
  informacion.className = "informacion-component";

  // --- Botones ---
  let botones = document.createElement("div");
  botones.className = "botones";
  informacion.appendChild(botones);

  let botonAgregar = document.createElement("button");
  botonAgregar.className = "boton-agregar";
  botonAgregar.textContent = "+ Agregar";
  botonAgregar.addEventListener("click", () => {
    if (!document.querySelector(".formulario")) {
      const modal = formulario();
      document.body.appendChild(modal);
    }
  });
  botones.appendChild(botonAgregar);

  let botonArchivar = document.createElement("button");
  botonArchivar.className = "boton-archivar";
  botonArchivar.textContent = "Archivar";
  botonArchivar.addEventListener("click", () => {
    alert("Archivar tareas completadas");
  });
  botones.appendChild(botonArchivar);

  // --- Contenedor info ---
  let contenedorInformacion = document.createElement("div");
  contenedorInformacion.className = "contenedor-informacion";
  informacion.appendChild(contenedorInformacion);

  let estadoInformacion = document.createElement("div");
  estadoInformacion.className = "estado-informacion";
  estadoInformacion.textContent = ` ${tarea.estado_tarea}`;
  contenedorInformacion.appendChild(estadoInformacion);

  let tituloInformacion = document.createElement("div");
  tituloInformacion.className = "titulo-informacion";
  tituloInformacion.textContent = ` ${tarea.nombre}`;
  contenedorInformacion.appendChild(tituloInformacion);

  let descripcionInformacion = document.createElement("div");
  descripcionInformacion.className = "descripcion-informacion";
  descripcionInformacion.textContent = tarea.descripcion || "Sin descripción";
  contenedorInformacion.appendChild(descripcionInformacion);

  let integranteContener = document.createElement("div");
  integranteContener.className = "integrante-contenedor";
  integranteContener.textContent = "Integrantes:";
  contenedorInformacion.appendChild(integranteContener);

  let integrantesInformacion = document.createElement("div");
  integrantesInformacion.className = "integrantes-informacion";
  integrantesInformacion.textContent = tarea.integrantes || "N/A";
  integranteContener.appendChild(integrantesInformacion);

  return informacion;
}
