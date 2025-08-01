import { headerComponent } from "../components/header/headerComponent.js";
import { footerComponent } from "../components/footer/footerComponent.js";
import { informacionComponent } from "../components/infomacionComponent/informacionComponent.js";
import { tareasComponent } from "../components/tareasComponent/tareasComponent.js";
function dashboard() {
  let dashboard = document.querySelector("#dashboard");
  dashboard.className = "dashboard";

  dashboard.appendChild(headerComponent());

  let section = document.createElement("section");
  section.className = "section-component";

  let tareasdb = [
    {
      id: 1,
      title: "Tarea 1",
      estado: "Pendiente",
      fecha: "2023-10-01",
      segundaFecha: "2023-10-15",
      integrantes: "Juan, Maria",
      descripcionInformacion:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Tarea 2",
      estado: "En Progreso",
      fecha: "2023-10-02",
      segundaFecha: "2023-10-16",
      integrantes: "Pedro, Ana",
      descripcionInformacion:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  section.appendChild(tareasComponent(tareasdb));

  let tareaInformacion = {
    id: 1,
    title: "Tilapias360",
    estado: "Pendiente",
    fecha: "2023-10-01",
    segundaFecha: "2023-10-15",
    integrantes: "Rocky, Paris",
    descripcionInformacion:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  section.appendChild(informacionComponent(tareaInformacion));
  dashboard.appendChild(section);

  dashboard.appendChild(footerComponent());
  return dashboard;
}

dashboard();
