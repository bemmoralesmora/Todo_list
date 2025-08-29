import { headerComponent } from "../components/header/headerComponent.js";
import { footerComponent } from "../components/footer/footerComponent.js";
import { informacionComponent } from "../components/infomacionComponent/informacionComponent.js";
import { tareasComponent } from "../components/tareasComponent/tareasComponent.js";

async function dashboard() {
  const dashboard = document.querySelector("#dashboard");
  dashboard.className = "dashboard";

  dashboard.appendChild(headerComponent());

  const section = document.createElement("section");
  section.className = "section-component";

  try {
    const response = await fetch(
      "https://todo-list-backend-ixh8.onrender.com/api/tareas"
    );
    if (!response.ok) throw new Error("Error en la respuesta del servidor");
    const tareasdb = await response.json();

    if (!tareasdb.length) {
      section.innerHTML = `<div class="no-tareas">No hay tareas disponibles</div>`;
    } else {
      const contador = document.querySelector("#contador-tareas");
      if (contador) contador.textContent = tareasdb.length;

      section.appendChild(tareasComponent(tareasdb, section));

      section.appendChild(informacionComponent(tareasdb[0]));
    }
  } catch (error) {
    console.error(error);
    section.innerHTML = `<div class="error-message">Error al cargar las tareas</div>`;
  }

  dashboard.appendChild(section);
  dashboard.appendChild(footerComponent());
}

document.addEventListener("DOMContentLoaded", dashboard);
