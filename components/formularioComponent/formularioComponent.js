export function formulario() {
  let formulario = document.createElement("div");
  formulario.className = "formulario";

  let formularioContenido = document.createElement("div");
  formularioContenido.className = "formulario-contenido";
  formulario.appendChild(formularioContenido);

  let nombreDeTarea = document.createElement("input");
  nombreDeTarea.type = "text";
  nombreDeTarea.name = "Nombre de la tarea";
  nombreDeTarea.placeholder = "Nombre de la tarea";
  nombreDeTarea.textContent = "Nueva Tarea";
  formularioContenido.appendChild(nombreDeTarea);

  let descripcionTarea = document.createElement("input");
  descripcionTarea.type = "text";
  descripcionTarea.name = "descripcion de la tarea";
  descripcionTarea.placeholder = "descripcion de la tarea";
  formularioContenido.appendChild(descripcionTarea);

  descripcionTarea.className = "descripcionTares";

  let fechaAcutual = document.createElement("p");
  let fecha = new Date();
  let dia = String(fecha.getDate()).padStart(2, "0");
  let mes = String(fecha.getMonth() + 1).padStart(2, "0");
  let anio = fecha.getFullYear();
  let fechaFormateada = `${anio}-${mes}-${dia}`;
  fechaAcutual.textContent = `Fecha Actual: ${fechaFormateada}`;
  formularioContenido.appendChild(fechaAcutual);

  let FechaLimite = document.createElement("input");
  FechaLimite.type = "date";
  FechaLimite.name = "Fecha Limite";
  FechaLimite.min = fechaFormateada;
  formularioContenido.appendChild(FechaLimite);

  let integranteTarea = document.createElement("input");
  integranteTarea.type = "text";
  integranteTarea.name = "Integrantes";
  integranteTarea.placeholder = "Integrantes";
  formularioContenido.appendChild(integranteTarea);

  let guardarTarea = document.createElement("button");
  guardarTarea.className = "guardar-tarea";
  guardarTarea.textContent = "Guardar";
  guardarTarea.addEventListener("click", () => {
    const datos = {
      nombre: nombreDeTarea.value,
      descripcion: descripcionTarea.value,
      fechaActual: fechaFormateada,
      fechaLimite: FechaLimite.value,
      integrantes: integranteTarea.value,
    };

    console.log("Datos ingresados:", datos);
    formulario.remove();
  });
  formularioContenido.appendChild(guardarTarea);

  let cerrarFormulario = document.createElement("span");
  cerrarFormulario.className = "cerrar-formulario";
  cerrarFormulario.innerHTML = "&times;";
  cerrarFormulario.addEventListener("click", () => {
    formulario.remove();
  });

  formularioContenido.appendChild(cerrarFormulario);

  return formulario;
}
