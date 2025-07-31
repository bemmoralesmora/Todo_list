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
  section.appendChild(tareasComponent());
  section.appendChild(informacionComponent());
  dashboard.appendChild(section);

  dashboard.appendChild(footerComponent());
  return dashboard;
}

dashboard();
